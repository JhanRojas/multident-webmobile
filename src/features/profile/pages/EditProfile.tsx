import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

import { translations } from '../../../utils/translations';

const EditProfile: React.FC = () => {
  const language = localStorage.getItem('language') || 'es';
  const t = translations[language as keyof typeof translations];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" text={t.backText} />
          </IonButtons>
          <IonTitle>Editar Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
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
              <IonButton fill="outline" size="small">
                Cambiar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList inset>
          <IonItem>
            <IonInput placeholder="Name" value="Katherine" />
          </IonItem>
          <IonItem>
            <IonInput placeholder="Lastname" value="Torres" />
          </IonItem>
          <IonItem>
            <IonInput placeholder="BirthDate" value="10/02/1992" />
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Mail"
              type="email"
              value="ktorres@email.com"
            />
          </IonItem>
          <IonItem>
            <IonInput placeholder="Phone" type="tel" value="+51 999 999 999" />
          </IonItem>
        </IonList>
        <IonButton expand="block" className="ion-padding ion-text-center">
          Guardar cambios
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
