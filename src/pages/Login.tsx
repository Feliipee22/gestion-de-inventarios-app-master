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
  IonInput, 
  IonButton, 
  IonMenuButton, 
  IonButtons, 
  IonSelect, 
  IonSelectOption, 
  IonDatetime, 
  IonToast 
} from '@ionic/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    if (password === confirmPassword) {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Birthdate:', birthdate);
      console.log('Phone:', phone);
      console.log('Gender:', gender);
      setShowToast(true); // Mostrar mensaje de éxito
    } else {
      alert('Las contraseñas no coinciden.');
    }
  };

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
              <IonLabel>Historial de Movimientos</IonLabel>
            </IonItem>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Página de login o registro */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding">
          {isRegistering ? (
            <>
              {/* Formulario de registro */}
              <IonItem>
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Confirmar contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={confirmPassword}
                  onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel>Fecha de nacimiento</IonLabel>
                <IonDatetime
                  value={birthdate}
                  onIonChange={(e) => setBirthdate(e.detail.value!)}
                  displayFormat="YYYY-MM-DD"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Teléfono</IonLabel>
                <IonInput
                  type="tel"
                  value={phone}
                  onIonChange={(e) => setPhone(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel>Género</IonLabel>
                <IonSelect value={gender} onIonChange={(e) => setGender(e.detail.value!)}>
                  <IonSelectOption value="male">Masculino</IonSelectOption>
                  <IonSelectOption value="female">Femenino</IonSelectOption>
                  <IonSelectOption value="other">Otro</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonButton expand="full" onClick={handleRegister}>
                Registrarse
              </IonButton>
              <IonButton expand="full" fill="clear" onClick={() => setIsRegistering(false)}>
                Volver a Iniciar Sesión
              </IonButton>

              <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Registro exitoso"
                duration={2000}
              />
            </>
          ) : (
            <>
              {/* Formulario de inicio de sesión */}
              <IonItem>
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonButton expand="full" onClick={handleLogin}>
                Iniciar Sesión
              </IonButton>
              <IonButton expand="full" fill="clear" onClick={() => setIsRegistering(true)}>
                Crear una cuenta
              </IonButton>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
