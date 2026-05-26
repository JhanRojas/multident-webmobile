import { useEffect, useRef, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonText,
  IonIcon,
} from '@ionic/react';
import {
  personAdd,
  cardOutline,
  accessibility,
  personCircle,
} from 'ionicons/icons';

import { speak } from '../../../utils/speech';
import { translations } from '../../../utils/translations';
import AppHeader from '../../../components/common/AppHeader';
import { getCurrentUser } from '../../../services/auth.service';

const Home: React.FC = () => {
  const hasSpoken = useRef(false);
  const [userName, setUserName] = useState('');
  const language = localStorage.getItem('language') || 'es';
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    if (hasSpoken.current) return;
    hasSpoken.current = true;

    const currentUser = getCurrentUser();

    setUserName(currentUser?.name || '');
    speak(
      `${t.hello}, 
      ${currentUser?.name}. 
      ${t.apptsNotFoundText1}`
    );
  }, []);

  return (
    <IonPage>
      <AppHeader title={t.home} />
      <IonContent fullscreen class="ion-padding">
        <h1>
          {t.hello}, {userName}!
        </h1>
        <h4>{t.upcomingAppts}</h4>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12" className="ion-text-center">
                  <IonLabel>{t.apptsNotFoundText1}</IonLabel>
                </IonCol>
                <IonCol size="12" className="ion-margin-top">
                  <IonButton
                    expand="block"
                    routerLink="/appointments/new"
                    color={'primary'}
                  >
                    {t.scheduleApptBtnText}
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <h4>{t.quickAccessText}</h4>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard
                button
                routerLink="/profile"
                className="ion-no-margin quick-action-card"
              >
                <IonCardHeader className="ion-align-items-center">
                  <IonIcon icon={personAdd} size="large"></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  <IonText>{t.addFamilyText}</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                button
                routerLink="/my-cards"
                className="ion-no-margin quick-action-card"
              >
                <IonCardHeader className="ion-align-items-center">
                  <IonIcon icon={cardOutline} size="large"></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  <IonText>{t.addCardText}</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard
                button
                routerLink="/accessibility"
                className="ion-no-margin quick-action-card"
              >
                <IonCardHeader className="ion-align-items-center">
                  <IonIcon icon={accessibility} size="large"></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  <IonText>{t.editAccessibilityText}</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                button
                routerLink="/profile"
                className="ion-no-margin quick-action-card"
              >
                <IonCardHeader className="ion-align-items-center">
                  <IonIcon icon={personCircle} size="large"></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  <IonText>{t.editProfileText}</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
