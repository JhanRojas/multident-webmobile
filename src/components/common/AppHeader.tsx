import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonAvatar,
} from '@ionic/react';

interface Props {
  title: string;
}

const AppHeader: React.FC<Props> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton routerLink="/profile">
            <IonAvatar style={{ width: '32px', height: '32px' }}>
              <img src="https://i.pravatar.cc/100" alt="Usuario" />
            </IonAvatar>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
