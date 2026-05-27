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
          <IonTitle>{t.editProfileTitle}</IonTitle>
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
<<<<<<< HEAD
                {t.changeText}
=======
                Cambiar
>>>>>>> 0cd031f6bd4a78e15668dc7030bfda08ceaa82b8
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList inset>
          <IonItem>
<<<<<<< HEAD
            <IonInput placeholder={t.firstNameText} value="Katherine" />
          </IonItem>
          <IonItem>
            <IonInput placeholder={t.lastNameText} value="Torres" />
          </IonItem>
          <IonItem>
            <IonInput placeholder={t.birthDateText} value="10/02/1992" />
          </IonItem>
          <IonItem>
            <IonInput
              placeholder={t.mailText}
=======
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
>>>>>>> 0cd031f6bd4a78e15668dc7030bfda08ceaa82b8
              type="email"
              value="ktorres@email.com"
            />
          </IonItem>
          <IonItem>
<<<<<<< HEAD
            <IonInput
              placeholder={t.phoneNumberText}
              type="tel"
              value="+51 999 999 999"
            />
          </IonItem>
        </IonList>
        <IonButton expand="block" className="ion-padding ion-text-center">
          {t.saveChangesText}
=======
            <IonInput placeholder="Phone" type="tel" value="+51 999 999 999" />
          </IonItem>
        </IonList>
        <IonButton expand="block" className="ion-padding ion-text-center">
          Guardar cambios
>>>>>>> 0cd031f6bd4a78e15668dc7030bfda08ceaa82b8
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
