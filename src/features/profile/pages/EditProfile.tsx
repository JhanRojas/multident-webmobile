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

const EditProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" />
          </IonButtons>
          <IonTitle>Editar Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonAvatar
                style={{ width: '100px', height: '100px', margin: '0 auto' }}
              >
                <img src="https://i.pravatar.cc/200" alt="Usuario" />
              </IonAvatar>
            </IonCol>
            <IonCol size="12" className="ion-text-center ion-margin-top">
              <IonButton fill="outline">Cambiar foto</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem>
            <IonInput value="Katherine Torres" />
          </IonItem>
          <IonItem>
            <IonInput type="email" value="ktorres@email.com" />
          </IonItem>
          <IonItem>
            <IonInput type="tel" value="+51 999 999 999" />
          </IonItem>
        </IonList>
        <IonButton expand="block" className="ion-margin-top">
          Guardar cambios
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
