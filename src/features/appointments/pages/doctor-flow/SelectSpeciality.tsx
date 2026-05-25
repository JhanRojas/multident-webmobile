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
  IonButton,
} from '@ionic/react';

const SelectSpeciality: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/appointments/doctor/select-doctor" />
          </IonButtons>
          <IonTitle>Agendar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonLabel>Seleccione especialidad y fecha</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Abelardo Francisco Maita Beltran</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Especialidad</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Sede</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Fecha</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hora</IonLabel>
          </IonItem>
          <IonItem>
            <IonButton routerLink="/appointments/doctor/confirm">
              Continuar
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SelectSpeciality;
