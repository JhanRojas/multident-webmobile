import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

import { registerUser } from '../../../services/auth.service';

const Register: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    registerUser({
      name,
      lastname,
      birthDate,
      email,
      password,
    });
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Crear Cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonText>
          <h1>Registro</h1>
        </IonText>
        <IonInput
          label="Nombre"
          labelPlacement="stacked"
          placeholder="Nombre completo"
          fill="outline"
          className="ion-margin-bottom"
          value={name}
          onIonInput={(e) => setName(e.detail.value!)}
        />
        <IonInput
          label="Apellidos"
          labelPlacement="stacked"
          placeholder="Apellidos completo"
          fill="outline"
          className="ion-margin-bottom"
          value={lastname}
          onIonInput={(e) => setLastName(e.detail.value!)}
        />
        <IonInput
          label="Fecha de Nacimiento"
          labelPlacement="stacked"
          placeholder="Fecha de Nacimiento"
          fill="outline"
          className="ion-margin-bottom"
          value={birthDate}
          onIonInput={(e) => setBirthDate(e.detail.value!)}
        />
        <IonInput
          label="Correo"
          labelPlacement="stacked"
          placeholder="correo@demo.com"
          fill="outline"
          className="ion-margin-bottom"
          value={email}
          onIonInput={(e) => setEmail(e.detail.value!)}
        />
        <IonInput
          label="Contraseña"
          labelPlacement="stacked"
          type="password"
          placeholder="********"
          fill="outline"
          className="ion-margin-bottom"
          value={password}
          onIonInput={(e) => setPassword(e.detail.value!)}
        />
        <IonButton expand="block" onClick={handleRegister}>
          Crear cuenta
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
