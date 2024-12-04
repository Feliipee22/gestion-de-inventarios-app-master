// Importa las funciones que necesitas de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase para tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyC7x0J64yQa6TIWyPGfMIflwad9ZOWo2c8",
  authDomain: "base-de-datos-e4725.firebaseapp.com",
  projectId: "base-de-datos-e4725",
  storageBucket: "base-de-datos-e4725.firebasestorage.app",
  messagingSenderId: "972402954307",
  appId: "1:972402954307:web:4736bcf45f13fbe91b44f6",
  measurementId: "G-QL2PR3PNSN",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta `app` para usarlo en otras partes del proyecto
export default app;
