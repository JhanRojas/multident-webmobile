import { Redirect, Route } from 'react-router-dom';
import type { RouteProps } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth.service';

const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          Component ? (
            <Component {...props} />
          ) : null
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
