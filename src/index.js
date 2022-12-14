import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_ID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <React.StrictMode>
        <GithubProvider>
          <App />
        </GithubProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Auth0Provider>
);
