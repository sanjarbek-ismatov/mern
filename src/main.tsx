import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Provider>
  </BrowserRouter>
);
