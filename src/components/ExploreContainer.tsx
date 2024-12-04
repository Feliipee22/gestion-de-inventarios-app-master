import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonGrid, IonRow, IonCol, IonIcon, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons, IonRouterOutlet } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { menuController } from '@ionic/core';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Menú lateral */}
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Ajustes</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Acerca de</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Página principal */}
      <IonPage id="main-content">
        {/* Cabecera con botón de menú */}
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>STOCK PRO+</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Contenido principal */}
        <IonContent className="ion-padding">
          <p>Bienvenido a STOCK PRO+.</p>
          <p>Aquí puedes gestionar tus inventarios de forma rápida y eficiente.</p>
        </IonContent>

        {/* Pie de página */}
        <IonFooter>
          <IonToolbar>
            <IonGrid>
              {/* Fila para enlaces de redes sociales */}
              <IonRow className="ion-justify-content-center">
                <IonCol size="auto">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoFacebook} size="large" />
                  </a>
                </IonCol>
                <IonCol size="auto">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoInstagram} size="large" />
                  </a>
                </IonCol>
                <IonCol size="auto">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoTwitter} size="large" />
                  </a>
                </IonCol>
              </IonRow>

              {/* Fila para texto de copyright */}
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" className="ion-text-center">
                  <p>© 2024 STOCK PRO+ - Todos los derechos reservados</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default HomePage;
