import app from '../config/firebase-config'; // Ruta al archivo de configuración
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Inicializa Firestore
const db = getFirestore(app);

// Función para obtener productos
export async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products; // Retorna los datos en forma de arreglo
}
