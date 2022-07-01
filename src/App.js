import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Fragment, useState } from "react";

import AuthService from "./services/AuthService";

function App() {
  const [currentUser] = useState(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      return user;
    }
    return null;
  });

  const [isAdmin] = useState(() => {
    if (currentUser) {
      if (currentUser.roles.includes("ROLE_ADMIN")) return true;
    }
    return false;
  });

  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  currentUser !== null ? (
                    isAdmin ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <Navigate to={"/"} replace />
                    )
                  ) : (
                    <Navigate to={"/login"} replace />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
