import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import App from "./App";

// Added for the Redux extension in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const persistConfig = {
  key: "root",
  storage,
};

// To persist the data in the localStorage
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux Store
// const store = createStore(reducers, enhancer);
let store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);

// Comment out to persist the data in the localStorage
persistor.purge();


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App className="container"/>
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
