interface IValidation {
  isValid: boolean;
  message: string;
}

export const validateValueInput = (value: string): Promise<IValidation> =>
  new Promise((resolve, reject) => {
    if (!value) {
      reject({ isValid: false, message: "Este campo es requerido" });
    }

    if (value.length < 3) {
      reject({
        isValid: false,
        message: "Este campo debe tener al menos 3 caracteres",
      });
    }

    const scriptTagPattern =
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    if (scriptTagPattern.test(value)) {
      reject({
        isValid: false,
        message: "El campo no debe contener etiquetas de script o código",
      });
      return;
    }

    resolve({ isValid: true, message: "Valor válido" });
  });

// get key from url https://spartans-ebooks.s3.sa-east-1.amazonaws.com/uploads/1743550219406_images.jpeg the url is from s3 bucket
// get the last part of the url after the last / and before the ? if exists

export const getKeyFromUrl = (url: string): string => {
  const urlParts = url.split("/");
  const lastPart = urlParts[urlParts.length - 1];
  const key = lastPart.split("?")[0]; // remove query params if exists
  return key;
};

export const formatPrice = (
  price: number,
  locale: string = "en-US",
  currency: string = "USD"
): string => {
  if (typeof price !== "number" || isNaN(price)) {
    return "Invalid price";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export function randomId(): string {
  return Math.random().toString(36).substr(2, 9);
}
