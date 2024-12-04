import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonMenu, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonMenuButton, 
  IonButtons, 
  IonIcon, 
  IonButton, 
  IonSearchbar, 
  IonTextarea, 
  IonToast 
} from '@ionic/react';
import { logoIonic, helpCircleOutline } from 'ionicons/icons';

const Ayuda: React.FC = () => {
  const [pregunta, setPregunta] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleEnviarPregunta = () => {
    if (pregunta.trim()) {
      setShowToast(true); // Mostrar notificación
      setPregunta(''); // Limpiar el campo
    }
  };

  return (
    <IonPage>
      {/* Menú lateral */}
      <IonMenu side="start" contentId="main-content" className="custom-menu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button routerLink="/home">
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem button routerLink="/gestion-inventario">
              <IonLabel>Gestión de Inventario</IonLabel>
            </IonItem>
            <IonItem button routerLink="/inventario">
              <IonLabel>Inventario</IonLabel>
            </IonItem>
            <IonItem button routerLink="/historial-movimientos">
              <IonLabel>Historial De Movimientos</IonLabel>
            </IonItem>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido de la página de Ayuda */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ayuda</IonTitle>
          <IonSearchbar slot="end" placeholder="Buscar..." style={{ width: '100px' }} />
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Ayuda</h1>
        <p>Aquí encontrarás toda la información necesaria para utilizar la aplicación de manera eficiente.</p>

        <h2>Cómo utilizar la aplicación</h2>
        <ul>
          <li>Accede a <strong>Gestión de Inventario</strong> para administrar tus productos, añadiendo, editando o eliminando elementos según sea necesario.</li>
          <li>Consulta el <strong>Inventario</strong> para ver una lista detallada de todos tus productos disponibles.</li>
          <li>Revisa el <strong>Historial de Movimientos</strong> para obtener un registro de todas las transacciones realizadas.</li>
          <li>Utiliza la sección de <strong>Ayuda</strong> para resolver dudas y problemas comunes.</li>
          <li>Para cualquier pregunta o asistencia adicional, no dudes en enviarnos un mensaje utilizando el formulario de abajo.</li>
        </ul>

        <IonItem lines="full">
          <IonIcon icon={helpCircleOutline} slot="start" />
          <IonLabel>¿Tienes alguna pregunta? Envíala aquí:</IonLabel>
        </IonItem>

        <IonTextarea
          placeholder="Escribe tu pregunta..."
          value={pregunta}
          onIonChange={(e) => setPregunta(e.detail.value!)}
          autoGrow
        />

        <IonButton expand="full" className="ion-margin-top" onClick={handleEnviarPregunta}>
          Enviar Pregunta
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Tu pregunta ha sido recibida. Responderemos en 24 a 48 horas."
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Ayuda;
