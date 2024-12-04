import React from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonList, 
  IonItem, IonLabel, IonMenuButton, IonButtons, IonSearchbar, IonButton, IonIcon, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol 
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import './Home.css';
import imagen39 from '../imagenes/39.jpg'; 

const Home: React.FC = () => {
  return (
    <>
      {/* Fondo animado */}
      <div className="container"></div> {/* Fondo de pantalla animado */}

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
              <IonLabel>Historial de Movimientos</IonLabel>
            </IonItem>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
            <IonItem button routerLink="/login">
              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Página principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="custom-title">StockPro+</IonTitle>
            {/* Contenedor para buscador e ícono */}
            <IonButtons slot="end" style={{ display: 'flex', alignItems: 'center' }}>
              <IonSearchbar placeholder="Buscar..." style={{ width: '150px', marginRight: '10px' }} />
              <IonButton routerLink="/login" fill="outline" aria-label="Login">
                <IonIcon icon={personCircle} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          {/* Contenedor del contenido principal */}
          <div className="home-container">
            <div className="main-content">
              <h2>Bienvenido a STOCK PRO+</h2>
              <p>
                Aquí puedes gestionar tus inventarios de forma rápida y eficiente.
                Lleva el control de tus productos con la máxima precisión y comodidad.
              </p>

              {/* Tarjetas informativas */}
              <IonGrid className="content-grid" fixed>
                <IonRow>
                  <IonCol size="6">
                    <IonCard className="card blue">
                      <IonCardHeader>
                        <IonCardTitle>Total de Productos</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>1,250 productos registrados</IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size="6">
                    <IonCard className="card dark-blue">
                      <IonCardHeader>
                        <IonCardTitle>Alertas Activas</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>5 notificaciones importantes</IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>

              {/* Imagen representativa */}
              <div className="image-container">
                <img 
                  src={imagen39} 
                  alt="Gestión de inventario" 
                  style={{ width: '100%', height: 'auto', marginTop: '20px' }} 
                />
              </div>

              {/* Noticias o actualizaciones */}
              <IonRow>
                <IonCol size="12">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Últimas Noticias</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>- Nuevo módulo de integración con proveedores disponible.</p>
                      <p>- Actualización de seguridad aplicada el 20 de octubre.</p>
                      <p>- Consulta nuestro webinar sobre optimización del inventario.</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </div>
          </div>
        </IonContent>
      </IonPage>

      {/* Pie de página */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              width="30"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              width="30"
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Logo_of_X_%28formerly_Twitter%29.svg"
              alt="Twitter"
              width="30"
            />
          </a>
        </div>
        <p>© 2024 STOCK PRO+ - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Home;
