import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from '@ionic/react';

import { getCurrentUser, logoutUser } from '../../../services/auth.service';
import type { User } from '../../../services/auth.service';

const Profile: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User | null>(null);
  const handleLogout = () => {
    logoutUser();
    history.replace('/login');
  };
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard/home" />
          </IonButtons>
          <IonTitle>Mi Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-text-center">
              <IonAvatar
                style={{ width: '100px', height: '100px', margin: '0 auto' }}
              >
                <img src="https://i.pravatar.cc/200" alt="Usuario" />
              </IonAvatar>
            </IonCol>
            <IonCol size="12" className="ion-text-center ion-margin-top">
              <IonText>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem button routerLink="/edit-profile">
            <IonLabel>Editar perfil</IonLabel>
          </IonItem>
          <IonItem button routerLink="/my-cards">
            <IonLabel>Mis tajertas</IonLabel>
          </IonItem>
          <IonItem button routerLink="/accessibility">
            <IonLabel>Accesibilidad</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Ayuda</IonLabel>
          </IonItem>
          <IonItem button color="danger" onClick={handleLogout}>
            <IonLabel>Cerrar sesión</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
