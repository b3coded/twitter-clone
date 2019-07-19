import { createStore, compose } from "redux";
import reducers from "./reducers";

// eslint-disable-next-line no-underscore-dangle
const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, compose(devToolsMiddleware));

export default store;
