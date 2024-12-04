import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import GestionInventario from './pages/GestionInventario';
import Inventario from './pages/Inventario';
import HistorialMovimientos from './pages/HistorialMovimientos';
import Ayuda from './pages/Ayuda';
import Login from './pages/Login';  // Importación de la página de Login

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark Mode and Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Rutas de la aplicación */}
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/gestion-inventario">
          <GestionInventario />
        </Route>
        <Route exact path="/inventario">
          <Inventario />
        </Route>
        <Route exact path="/historial-movimientos">
          <HistorialMovimientos />
        </Route>
        <Route exact path="/ayuda">
          <Ayuda />
        </Route>
        <Route exact path="/login">  {/* Ruta para la página de Login */}
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
