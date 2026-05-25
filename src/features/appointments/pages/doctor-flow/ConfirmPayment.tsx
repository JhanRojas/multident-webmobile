import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonButton,
} from '@ionic/react';

const ConfirmPayment: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/new-appointment-doctor-step2" />
          </IonButtons>
          <IonTitle>Agendar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonLabel>Financiamiento</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonButton routerLink="/dashboard/appointment">Continuar</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmPayment;
