import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import logging from "./Config/logging";
import routes from "./Config/routes";
import { Navbar } from "./Components/Navbar";
import { IphoneNavbar } from "./Components/IphoneNavbar";
import "./application.css";

const Application: React.FunctionComponent<unknown> = (props) => {
  useEffect(() => {
    logging.info("Loading application.");
  }, []);

  return (
    <div className="wrap">
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Application;
