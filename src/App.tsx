import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode 
import '@ionic/react/css/palettes/dark.system.css';*/
import '@ionic/react/css/palettes/dark.class.css';

/* Theme variables */
import './theme/variables.css';

import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Dashboard from './features/dashboard/pages/Dashboard';
import Profile from './features/profile/pages/Profile';
import EditProfile from './features/profile/pages/EditProfile';
import MyCards from './features/profile/pages/MyCards';
import Accessibility from './features/accessibility/pages/Accessibility';
import NewAppointment from './features/appointments/pages/NewAppointment';
import SelectDoctor from './features/appointments/pages/doctor-flow/SelectDoctor';
import SelectSpeciality from './features/appointments/pages/doctor-flow/SelectSpeciality';
import ConfirmPayment from './features/appointments/pages/doctor-flow/ConfirmPayment';
import ConfirmAppointment from './features/appointments/pages/doctor-flow/ConfirmAppointment';

setupIonicReact({
  mode: 'ios',
  animated: localStorage.getItem('reduceMotion') === 'false',
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute
          exact
          path="/"
          render={() => <Redirect to="/login" />}
        />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/edit-profile" component={EditProfile} />
        <ProtectedRoute exact path="/my-cards" component={MyCards} />
        <ProtectedRoute exact path="/accessibility" component={Accessibility} />
        <ProtectedRoute
          exact
          path="/appointments/new"
          component={NewAppointment}
        />
        <ProtectedRoute
          exact
          path="/appointments/doctor/select-doctor"
          component={SelectDoctor}
        />
        <ProtectedRoute
          exact
          path="/appointments/doctor/select-specialty"
          component={SelectSpeciality}
        />
        <ProtectedRoute
          exact
          path="/appointments/doctor/confirm"
          component={ConfirmAppointment}
        />
        <ProtectedRoute
          exact
          path="/appointments/doctor/payment"
          component={ConfirmPayment}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
