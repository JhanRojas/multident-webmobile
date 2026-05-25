import { Route, Redirect } from 'react-router-dom';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { home, micOutline, calendar } from 'ionicons/icons';

import { translations } from '../../../utils/translations';
import Home from '../../dashboard/pages/Home';
import Assistant from '../../dashboard/pages/Assistant';
import Appointment from '../../dashboard/pages/Appointment';

const DashboardPage: React.FC = () => {
  const language = localStorage.getItem('language') || 'es';
  const t = translations[language as keyof typeof translations];

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/dashboard/home" component={Home} />
        <Route exact path="/dashboard/assistant" component={Assistant} />
        <Route exact path="/dashboard/appointment" component={Appointment} />
        <Route
          exact
          path="/dashboard"
          render={() => <Redirect to="/dashboard/home" />}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/dashboard/home">
          <IonIcon icon={home} />
          <IonLabel>{t.home}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/dashboard/assistant">
          <IonIcon icon={micOutline} />
          <IonLabel>{t.assistant}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/dashboard/appointment">
          <IonIcon icon={calendar} />
          <IonLabel>{t.appointments}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default DashboardPage;
