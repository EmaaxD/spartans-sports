// Minimal ambient declaration to satisfy TypeScript when package typings can't be resolved via "exports".
declare module 'onnxruntime-web' {
  const ort: any
  export = ort
}
