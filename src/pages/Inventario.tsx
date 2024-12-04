import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons } from '@ionic/react';

// Simulación de datos de inventario
const inventoryItems = [
  { id: 1, name: 'Producto A', quantity: 10 },
  { id: 2, name: 'Producto B', quantity: 5 },
  { id: 3, name: 'Producto C', quantity: 7 },
];

const Inventario: React.FC = () => (
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
            <IonLabel>Gestión de inventario</IonLabel>
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

    {/* Contenido de la página Inventario */}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Inventario</IonTitle>
        <IonSearchbar slot="end" placeholder="Buscar..." style={{ width: '300px' }} />
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <h1>Inventario</h1>
      <p>Aquí puedes ver y gestionar tu inventario de productos.</p>

      {/* Lista de inventario */}
      <IonList>
        {inventoryItems.map(item => (
          <IonItem key={item.id}>
            <IonLabel>{item.name} - Cantidad: {item.quantity}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  </IonPage>
);

export default Inventario;
