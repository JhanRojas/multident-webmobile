import { IonPage, IonContent } from '@ionic/react';

import { translations } from '../../../utils/translations';
import AppHeader from '../../../components/common/AppHeader';

const Assistant: React.FC = () => {
  const language = localStorage.getItem('language') || 'es';
  const t = translations[language as keyof typeof translations];

  return (
    <IonPage>
      <AppHeader title={t.assistant} />
      <IonContent fullscreen>Assistant Content</IonContent>
    </IonPage>
  );
};

export default Assistant;
