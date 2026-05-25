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
  IonAvatar,
  IonItem,
} from '@ionic/react';

const SelectDoctor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/appointments/new" />
          </IonButtons>
          <IonTitle>Agendar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonLabel>Selecciona el Médico</IonLabel>
          </IonListHeader>
          <IonItem routerLink="/appointments/doctor/select-specialty">
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Abelardo Francisco Maita Beltran</IonLabel>
          </IonItem>
          <IonItem routerLink="/appointments/doctor/select-specialty">
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Adolfo Felipe Chumbiauca Donayre</IonLabel>
          </IonItem>
          <IonItem routerLink="/appointments/doctor/select-specialty">
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Adriana Irma Rengifo Carpio</IonLabel>
          </IonItem>
          <IonItem routerLink="/appointments/doctor/select-specialty">
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Aguilar Cano David</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SelectDoctor;
