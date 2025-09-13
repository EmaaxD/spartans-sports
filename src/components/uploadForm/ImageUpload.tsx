import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import * as ImglyBR from "@imgly/background-removal";
import { MdCleaningServices } from "react-icons/md";

type Props = {
  onProcessed?: (fileOrBlob: File | Blob | null) => void;
};

export default function ImageUpload({ onProcessed }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [backgroundRemoved, setBackgroundRemoved] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const checkerStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(45deg,#e6e6e6 25%,transparent 25%),linear-gradient(-45deg,#e6e6e6 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e6e6e6 75%),linear-gradient(-45deg,transparent 75%,#e6e6e6 75%)",
    backgroundSize: "16px 16px",
    backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
  };

  const handleFile = (f?: File) => {
    const selected =
      f ?? (inputRef.current?.files ? inputRef.current.files[0] : undefined);
    if (!selected) return;

    // Validar que sea una imagen
    if (!selected.type.startsWith("image/")) {
      toast.error("Por favor selecciona solo archivos de imagen");
      return;
    }

    if (preview) {
      try {
        URL.revokeObjectURL(preview);
      } catch {}
    }
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setBackgroundRemoved(false);

    // Notificar al padre inmediatamente que hay una imagen original
    console.log("Sending original file to parent:", selected.name, selected.size, "bytes");
    onProcessed?.(selected);
  };

  const processFile = async (inputFile?: File | null) => {
    const currentFile = inputFile ?? file;
    if (!currentFile) return;

    // Mostrar alerta de proceso largo
    toast.loading(
      "Este proceso puede tardar unos minutos, por favor espere...",
      {
        duration: 0, // No auto-dismiss
        id: "background-removal-loading",
      }
    );

    setLoading(true);

    try {
      const img = await createImageBitmap(currentFile);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      // Use the officially exported removeBackground function (expects Blob|ImageData|ArrayBuffer|Uint8Array|URL|string)
      let outBlob: Blob | null = null;
      try {
        // Preload assets once per session to avoid missing runtime resources
        (processFile as any)._preloaded =
          (processFile as any)._preloaded || false;
        if (!(processFile as any)._preloaded) {
          try {
            const cfg: any = {
              progress: (key: string, current: number, total: number) => {
                console.info(`download progress ${key}: ${current}/${total}`);
              },
            };
            const preloadFn =
              (ImglyBR as any).preload || (ImglyBR as any).default?.preload;
            if (typeof preloadFn === "function") await preloadFn(cfg as any);
            (processFile as any)._preloaded = true;
          } catch (preErr) {
            console.warn("Preload failed (continuing), error:", preErr);
          }
        }

        const removeFn =
          (ImglyBR as any).removeBackground ||
          (ImglyBR as any).default ||
          (ImglyBR as any);
        if (typeof removeFn !== "function")
          throw new Error("removeBackground function not found in module");

        const canvasBlob: Blob | null = await new Promise((res) =>
          canvas.toBlob((b) => res(b), "image/png")
        );
        let result: any;
        if (canvasBlob) {
          result = await removeFn(canvasBlob as any);
        } else {
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          result = await removeFn(imageData as any);
        }

        console.debug(
          "removeBackground result type:",
          result &&
            (result.constructor ? result.constructor.name : typeof result)
        );

        if (!result) throw new Error("Empty result from removeBackground");
        if (result instanceof Blob) {
          outBlob = result;
        } else if (result instanceof HTMLCanvasElement) {
          outBlob = await new Promise<Blob | null>((res) =>
            result.toBlob((b) => res(b), "image/png")
          );
        } else if (result.buffer && result.byteLength) {
          const arr = new Uint8ClampedArray(result.buffer);
          const id = new ImageData(arr, canvas.width, canvas.height);
          const mcanvas = document.createElement("canvas");
          mcanvas.width = id.width;
          mcanvas.height = id.height;
          const mctx = mcanvas.getContext("2d")!;
          mctx.putImageData(id, 0, 0);
          outBlob = await new Promise<Blob | null>((res) =>
            mcanvas.toBlob((b) => res(b), "image/png")
          );
        } else {
          throw new Error("Unrecognized result type from removeBackground");
        }
      } catch (normErr) {
        console.error(
          "removeBackground failed or returned unexpected type",
          normErr
        );
        toast.dismiss("background-removal-loading");
        toast.error("La librería falló al procesar la imagen");
        setPreview(URL.createObjectURL(currentFile));
        setBackgroundRemoved(false);
        onProcessed?.(currentFile);
        setLoading(false);
        return;
      }

      if (!outBlob) {
        toast.dismiss("background-removal-loading");
        toast.error("Resultado vacío al procesar la imagen");
        setPreview(URL.createObjectURL(currentFile));
        setBackgroundRemoved(false);
        onProcessed?.(currentFile);
        setLoading(false);
        return;
      }

      // Convertir Blob a File para compatibilidad
      const processedFile = new File(
        [outBlob],
        `processed-${currentFile.name}`,
        {
          type: "image/png",
          lastModified: Date.now(),
        }
      );

      const url = URL.createObjectURL(outBlob);
      setPreview(url);
      setBackgroundRemoved(true);

      // Enviar el File procesado en lugar del Blob
      console.log("Sending processed file to parent:", processedFile.name, processedFile.size, "bytes");
      onProcessed?.(processedFile);

      // Dismissar loading y mostrar éxito
      toast.dismiss("background-removal-loading");
      toast.success("Fondo removido exitosamente");
    } catch (e) {
      console.error("processFile error", e);
      toast.dismiss("background-removal-loading");
      toast.error("Error al procesar la imagen");
      setPreview(URL.createObjectURL(currentFile));
      setBackgroundRemoved(false);
      onProcessed?.(currentFile);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-3 sm:p-4 bg-gray-800/80 border border-gray-700 rounded-lg shadow-lg">
      <label className="block text-sm font-medium text-gray-100 mb-3">
        Subir imagen
      </label>

      {/* Layout responsive: vertical en móvil, horizontal en desktop */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Contenedor de imagen - se adapta al ancho disponible */}
        <div className="relative bg-[#374151] w-full sm:w-32 h-32 sm:h-32 max-w-xs mx-auto sm:mx-0 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="preview"
              className={`object-contain w-full h-full p-1 ${
                loading ? "opacity-40 blur-sm" : ""
              }`}
              style={{ backgroundColor: "transparent" }}
            />
          ) : (
            <span className="text-sm text-gray-400">Preview</span>
          )}

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
              <div
                className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-4 border-white border-t-transparent"
                aria-hidden="true"
              />
              <span className="sr-only">Procesando imagen...</span>
            </div>
          )}
        </div>

        {/* Controles - toman el espacio restante */}
        <div className="flex-1 w-full sm:w-auto">
          {/* Badge de estado */}
          {!loading && backgroundRemoved && (
            <div className="mb-3 inline-flex items-center gap-2 bg-violet-600 text-white text-xs px-2 py-1 rounded">
              <span>Fondo removido</span>
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(e) =>
              handleFile(e.target.files ? e.target.files[0] : undefined)
            }
            className="hidden"
          />

          <div className="flex flex-col gap-3">
            {/* Botones - stack vertical en móvil, horizontal en tablet+ */}
            <div className="flex flex-col xs:flex-row gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="flex-1 xs:flex-initial inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-gradient-to-br from-violet-600 to-violet-500 text-white rounded-md shadow-md hover:from-violet-500 hover:to-violet-400 transform hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
              >
                Seleccionar
              </button>

              <button
                type="button"
                onClick={() => processFile(file).catch(() => {})}
                disabled={!file || loading}
                className="flex-1 xs:flex-initial inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-md shadow-md bg-gradient-to-br from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transform hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
              >
                {loading ? "Procesando..." : "Remover fondo"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  if (preview) {
                    try {
                      URL.revokeObjectURL(preview);
                    } catch {}
                  }
                  setPreview(null);
                  setBackgroundRemoved(false);
                  if (inputRef.current) inputRef.current.value = "";
                  // Notificar al padre que se limpió la imagen
                  console.log("Clearing image, sending null to parent");
                  onProcessed?.(null);
                  toast.success("Imagen eliminada");
                }}
                className="xs:w-auto w-12 h-10 xs:h-auto inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-gradient-to-br from-red-500 to-red-400 text-white rounded-md shadow-md hover:from-red-400 hover:to-red-300 transform hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
              >
                <MdCleaningServices className="text-base" />
                <span className="hidden xs:inline">Limpiar</span>
              </button>
            </div>

            {/* Texto de ayuda */}
            <div className="text-xs text-gray-300 text-center sm:text-left space-y-1">
              <p>Selecciona una imagen y pulsa "Remover fondo"</p>
              {!file && (
                <p className="text-yellow-400">
                  📱 En móvil: Puedes tomar foto o seleccionar de galería
                </p>
              )}
              {backgroundRemoved && (
                <p className="text-green-400">
                  ✅ Imagen procesada lista para guardar
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
