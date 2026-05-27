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
  IonButton,
} from '@ionic/react';

import { translations } from '../../../utils/translations';
import { getCurrentUser, logoutUser } from '../../../services/auth.service';
import type { User } from '../../../services/auth.service';

const Profile: React.FC = () => {
  const language = localStorage.getItem('language') || 'es';
  const t = translations[language as keyof typeof translations];
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
            <IonBackButton defaultHref="/dashboard/home" text={t.backText} />
          </IonButtons>
<<<<<<< HEAD
          <IonTitle>{t.profileTitle}</IonTitle>
=======
          <IonTitle>{t.myProfileText}</IonTitle>
>>>>>>> 0cd031f6bd4a78e15668dc7030bfda08ceaa82b8
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-text-center">
              <IonAvatar
                style={{ width: '100px', height: '100px', margin: '0 auto' }}
              >
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="Usuario"
                />
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
        <IonList inset>
          <IonItem button routerLink="/edit-profile">
            <IonLabel>{t.editProfileText}</IonLabel>
          </IonItem>
          <IonItem button routerLink="/my-cards">
            <IonLabel>{t.myCardsText}</IonLabel>
          </IonItem>
          <IonItem button routerLink="/accessibility">
            <IonLabel>{t.accessibilityText}</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>{t.helpText}</IonLabel>
          </IonItem>
        </IonList>
        <IonButton
          onClick={handleLogout}
          expand="block"
          color={'danger'}
          className="ion-padding ion-text-center"
        >
<<<<<<< HEAD
          {t.logOutText}
=======
          Cerrar sesión
>>>>>>> 0cd031f6bd4a78e15668dc7030bfda08ceaa82b8
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
