import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { useSelector } from "react-redux";
import Login from "./pages/login";

const Layout = lazy(() => import("./containers/Layout"));
// const Login = lazy(() => import("./pages/login"));

function App() {
  const userLogin = useSelector((state) => state.userPagination);
  console.log(userLogin.isAdminLogin);
  if (userLogin.isAdminLogin === false) {
    return (
      <>
        <Router>
          <Switch>
            <Route>
              <Login />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
  return (
    <>
      <Router>
        <Suspense fallback="loading">
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <Layout {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
