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
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import { cardOutline, addOutline } from 'ionicons/icons';

const MyCards: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" />
          </IonButtons>
          <IonTitle>Mis tarjetas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonIcon icon={cardOutline} size="large" />
                </IonCol>
                <IonCol size="12" className="ion-margin-top">
                  <IonLabel>**** **** **** 4587</IonLabel>
                </IonCol>
                <IonCol size="12" className="ion-margin-top">
                  <IonLabel color="medium">Visa • Katherine Torres</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonList inset>
          <IonItem button>
            <IonIcon icon={addOutline} slot="start" />
            <IonLabel>Agregar nueva tarjeta</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Cambiar tarjeta predeterminada</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Eliminar tarjeta</IonLabel>
          </IonItem>
        </IonList>
        <IonButton expand="block" className="ion-margin-top">
          Guardar cambios
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MyCards;
