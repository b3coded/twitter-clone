import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes";
import AppTheme, { light, dark } from "./styles/theme";

const mode = "light";

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <Routes />
      </AppTheme>
    </Provider>
  );
};
export default App;
