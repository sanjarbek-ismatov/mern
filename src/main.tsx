import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "./components/register/AppHeader";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<AppHeader />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
