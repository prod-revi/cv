import React from "react";
import {
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { authenticated } from '../redux/actions'

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const  PrivateRoute = ({ children, ...rest }) => {
  const account = useSelector(state => state.account)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        account.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const  AuthButton = () => {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  const { isAuthenticated } = account
  let history = useHistory();

  return isAuthenticated ? (
    <p>
      Welcome!{" Revi "}
      <button
        onClick={() => {
          dispatch(authenticated(true))
          history.push("/")
          // fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

const  PublicPage = () => {
  return <h3>Public</h3>;
}

const  ProtectedPage = () => {
  // aqui va con inputs
  return <h3>Pagina con Inputs</h3>;
}

const  LoginPage = () => {
  // Aqui va sin inputs
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch()

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    // fakeAuth.authenticate(() => {
    //   history.replace(from);
    // });
    dispatch(authenticated(true))
    history.replace(from)
  };

  return (
    <div>
      <p>Esta es tu cv si quieres editarla porfavor logeate</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export { PrivateRoute, PublicPage, ProtectedPage, LoginPage, AuthButton }