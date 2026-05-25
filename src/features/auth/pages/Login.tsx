import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import { isAuthenticated } from '../../../services/auth.service';
import { loginUser } from '../../../services/auth.service';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    const success = loginUser(email, password);
    if (!success) {
      setError('Correo o contraseña incorrectos');
      return;
    }
    history.push('/dashboard');
  };

  useEffect(() => {
    if (isAuthenticated()) {
      history.replace('/dashboard');
    }
  }, []);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed className="ion-padding ion-margin-top">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="4">
              <IonInput
                label="Correo"
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
                labelPlacement="stacked"
                placeholder="correo@demo.com"
                fill="outline"
                className="ion-margin-bottom"
              />
              <IonInput
                label="Contraseña"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
                labelPlacement="stacked"
                type="password"
                placeholder="********"
                fill="outline"
                className="ion-margin-bottom"
              />
              <IonButton expand="block" size="default" onClick={handleLogin}>
                Ingresar
              </IonButton>
              <IonText className="ion-text-center">
                <p>
                  ¿No tiene cuenta?
                  <IonButton fill="clear" size="small" routerLink="/register">
                    Regístrate
                  </IonButton>
                </p>
              </IonText>
              {error && (
                <IonText color="danger">
                  <p className="ion-text-center">{error}</p>
                </IonText>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
