import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="dev-fcgzs4kgouncxmyb.us.auth0.com"
  clientId="1aMs72WA2N64hOHIeU4xa74xEgxPSAVG"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>
);
