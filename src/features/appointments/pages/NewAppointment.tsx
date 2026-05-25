import React, { useState, useRef, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonLabel,
  IonButton,
  IonList,
  IonListHeader,
  IonItem,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonAvatar,
} from '@ionic/react';

const NewAppointment: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);
  const [canDismiss] = useState(true);
  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  function dismiss() {
    modal.current?.dismiss();
  }

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard/home" />
          </IonButtons>
          <IonTitle>Agendar cita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonLabel>¿Para quién es la cita?</IonLabel>
          </IonListHeader>
          <IonItem id="open-modal">
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Katherine Torres</IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <IonLabel>¿Cómo deseas agendar tu cita?</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonButton
              size="large"
              routerLink="/appointments/doctor/select-doctor"
            >
              Por médico
            </IonButton>
            <IonButton size="large">Por especialidad</IonButton>
          </IonItem>
        </IonList>
        <IonModal
          ref={modal}
          trigger="open-modal"
          canDismiss={canDismiss}
          presentingElement={presentingElement}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Pacientes</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p className="ion-padding-horizontal">Seleccione un paciente</p>
            <IonRadioGroup value="patient">
              <IonItem>
                <IonAvatar aria-hidden="true" slot="start">
                  <img
                    alt=""
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonRadio>
                  <IonLabel>Katherine Torres</IonLabel>
                </IonRadio>
              </IonItem>
              <IonItem>
                <IonAvatar aria-hidden="true" slot="start">
                  <img
                    alt=""
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonRadio>
                  <IonLabel>Roberto Torres</IonLabel>
                </IonRadio>
              </IonItem>
              <IonItem>
                <IonAvatar aria-hidden="true" slot="start">
                  <img
                    alt=""
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonRadio>
                  <IonLabel>María Zegarra</IonLabel>
                </IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default NewAppointment;
