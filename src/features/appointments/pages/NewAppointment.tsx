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
  IonCard,
  IonCardHeader,
  IonIcon,
  IonCardContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { person, library } from 'ionicons/icons';

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
      <IonContent fullscreen class="ion-padding">
        <IonText>
          <h4 className="ion-padding-start">Paciente</h4>
        </IonText>
        <IonList className="ion-margin-bottom">
          <IonItem button id="open-modal">
            <IonAvatar aria-hidden="true" slot="start">
              <img
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Katherine Torres</IonLabel>
          </IonItem>
        </IonList>
        <IonText>
          <h4 className="ion-padding-start ion-padding-top">
            ¿Cómo deseas agendar tu cita?
          </h4>
        </IonText>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard
                button
                routerLink="/appointments/doctor/select-doctor"
                className="ion-no-margin"
              >
                <IonCardHeader className="ion-align-items-center">
                  <IonIcon icon={person} size="large"></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  <IonText>Médico</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard button className="ion-no-margin">
                <IonCardHeader className="ion-align-items-center">
                  <IonIcon icon={library} size="large"></IonIcon>
                </IonCardHeader>
                <IonCardContent className="ion-text-center">
                  <IonText>Especialidad</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
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
