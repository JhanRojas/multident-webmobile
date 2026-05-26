import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
} from '@ionic/react';

import { translations } from '../../../utils/translations';
import AppHeader from '../../../components/common/AppHeader';

const Appointment: React.FC = () => {
  const language = localStorage.getItem('language') || 'es';
  const t = translations[language as keyof typeof translations];

  return (
    <IonPage>
      <AppHeader title={t.appointments} />
      <IonContent fullscreen>
        <IonSegment value="upcoming">
          <IonSegmentButton value="upcoming" contentId="upcoming">
            <IonLabel>upcoming</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="history" contentId="history">
            <IonLabel>history</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonSegmentView>
          <IonSegmentContent id="upcoming">
            <IonCard>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                      <IonLabel>No cuentas con citas por el momento</IonLabel>
                    </IonCol>
                    <IonCol size="12" className="ion-margin-top">
                      <IonButton expand="block" routerLink="/appointments/new">
                        Agendar cita
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </IonSegmentContent>
          <IonSegmentContent id="history">history</IonSegmentContent>
        </IonSegmentView>
      </IonContent>
    </IonPage>
  );
};

export default Appointment;
