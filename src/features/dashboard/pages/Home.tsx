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
} from '@ionic/react';

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
      <IonContent class="ion-padding">
        <h1>
          {t.hello}, {userName}!
        </h1>
        <h4>{t.upcomingAppts}</h4>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonLabel>{t.apptsNotFoundText1}</IonLabel>
                </IonCol>
                <IonCol size="12" className="ion-margin-top">
                  <IonButton expand="block" routerLink="/appointments/new">
                    {t.scheduleApptBtnText}
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <h4>{t.quickAccessText}</h4>
      </IonContent>
    </IonPage>
  );
};

export default Home;
