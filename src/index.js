import "./index.css";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./redux/app/store";
import { SideBarProvider } from "./contexts";
import reportWebVitals from "./reportWebVitals";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { BrowserRouter as ReactRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactRouter>
      <Provider store={store}>
        <AppThemeProvider>
          <SideBarProvider>
            <App />
          </SideBarProvider>
        </AppThemeProvider>
      </Provider>
    </ReactRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
