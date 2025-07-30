// create o get indexedDB
export const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("SpartansDB", 1);

    request.onerror = () => {
      reject("Error opening database");
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = () => {
      const db = request.result;

      // Crear la colección 'favorites' si no existe
      if (!db.objectStoreNames.contains("favorites")) {
        db.createObjectStore("favorites", { autoIncrement: true });
      }

      // Crear la colección 'shopping-cart' si no existe
      if (!db.objectStoreNames.contains("shopping-cart")) {
        db.createObjectStore("shopping-cart", { autoIncrement: true });
      }
    };
  });
};

// add favorite to indexedDB
export const addFavorite = async (favorite: string): Promise<void> => {
  const db = await openDatabase();
  return new Promise(async (resolve, reject) => {
    const transaction = db.transaction("favorites", "readonly");
    const store = transaction.objectStore("favorites");

    // Obtener todos los favoritos actuales
    const request = store.getAll();

    request.onsuccess = async () => {
      const favorites: string[] = request.result;

      // Verificar si el favorito ya existe
      if (favorites.includes(favorite)) {
        reject("Favorite already exists");
        return;
      }

      // Si no existe, agregar el favorito
      const writeTransaction = db.transaction("favorites", "readwrite");
      const writeStore = writeTransaction.objectStore("favorites");
      const addRequest = writeStore.add(favorite);

      addRequest.onsuccess = () => {
        console.log("Favorite added:", favorite);
        resolve();
      };

      addRequest.onerror = () => {
        console.error("Error adding favorite");
        reject("Error adding favorite");
      };
    };

    request.onerror = () => {
      console.error("Error retrieving favorites");
      reject("Error retrieving favorites");
    };
  });
};

// get all favorites from indexedDB
export const getFavorites = async (): Promise<string[]> => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("favorites", "readonly");
    const store = transaction.objectStore("favorites");
    const request = store.getAll();

    request.onsuccess = () => {
      const result = request.result;
      if (result.length === 0) {
        resolve([]); // Devolver un array vacío si no hay registros
      } else {
        resolve(result);
      }
    };

    request.onerror = () => {
      reject("Error retrieving favorites");
    };
  });
};

// remove favorite from indexedDB
export const deleteFavoriteById = async (value: string): Promise<void> => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("favorites", "readonly");
    const store = transaction.objectStore("favorites");

    const request = store.getAll(); // Obtener todos los registros para buscar el valor

    request.onsuccess = () => {
      const allFavorites = request.result;

      // Buscar el índice del valor que coincide
      const entry = allFavorites.find((item: string) => item === value);

      if (!entry) {
        reject(`Value "${value}" not found`);
        return;
      }

      // Si encontramos el valor, ahora debemos obtener su key para eliminarlo
      const deleteTransaction = db.transaction("favorites", "readwrite");
      const deleteStore = deleteTransaction.objectStore("favorites");

      // Recorrer los keys (autoIncrement) hasta encontrar el valor correcto
      const keyRequest = deleteStore.openCursor();

      keyRequest.onsuccess = (event: any) => {
        const cursor = event.target.result;
        if (cursor) {
          if (cursor.value === value) {
            cursor.delete(); // Eliminar el registro que coincide con el valor
            resolve();
            return;
          }
          cursor.continue(); // Continuar buscando
        } else {
          reject(`Value "${value}" not found in the store`);
        }
      };

      keyRequest.onerror = () => {
        reject("Error in cursor operation");
      };
    };

    request.onerror = () => {
      reject("Error retrieving all values");
    };
  });
};

// add item to shopping cart in indexedDB
export const addToCart = async (item: string): Promise<void> => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("shopping-cart", "readwrite");
    const store = transaction.objectStore("shopping-cart");

    const request = store.add(item); // Agregar el string al carrito

    request.onsuccess = () => {
      console.log("Item added to cart:", item);
      resolve();
    };

    request.onerror = () => {
      console.error("Error adding item to cart");
      reject("Error adding item to cart");
    };
  });
};

// get all items from shopping cart in indexedDB
export const getCartItems = async (): Promise<string[]> => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("shopping-cart", "readonly");
    const store = transaction.objectStore("shopping-cart");
    const request = store.getAll(); // Obtener todos los ítems del carrito

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      console.error("Error retrieving cart items");
      reject("Error retrieving cart items");
    };
  });
};

// remove item from shopping cart in indexedDB
export const deleteCartItemByValue = async (value: string): Promise<void> => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("shopping-cart", "readonly");
    const store = transaction.objectStore("shopping-cart");

    const request = store.getAll(); // Obtener todos los registros para buscar el valor

    request.onsuccess = () => {
      const allItems = request.result;

      // Buscar el valor que coincide
      const entry = allItems.find((item: string) => item === value);

      if (!entry) {
        reject(`Value "${value}" not found`);
        return;
      }

      // Si encontramos el valor, ahora eliminamos usando un cursor
      const deleteTransaction = db.transaction("shopping-cart", "readwrite");
      const deleteStore = deleteTransaction.objectStore("shopping-cart");

      const keyRequest = deleteStore.openCursor();

      keyRequest.onsuccess = (event: any) => {
        const cursor = event.target.result;
        if (cursor) {
          if (cursor.value === value) {
            cursor.delete(); // Eliminar el registro que coincide con el valor
            console.log(`Deleted item with value: ${value}`);
            resolve();
            return;
          }
          cursor.continue(); // Continuar buscando
        } else {
          reject(`Value "${value}" not found in the store`);
        }
      };

      keyRequest.onerror = () => {
        console.error("Error in cursor operation");
        reject("Error in cursor operation");
      };
    };

    request.onerror = () => {
      console.error("Error retrieving all values");
      reject("Error retrieving all values");
    };
  });
};

// remove all items from shopping cart in indexedDB
export const deleteAllCartItems = async (): Promise<void> => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("shopping-cart", "readwrite");
    const store = transaction.objectStore("shopping-cart");

    const request = store.clear(); // Limpiar todos los registros

    request.onsuccess = () => {
      console.log("All items deleted from cart");
      resolve();
    };

    request.onerror = () => {
      console.error("Error deleting all items from cart");
      reject("Error deleting all items from cart");
    };
  });
};
