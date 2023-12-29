import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { composeWithDevTools} from 'redux-devtools-extension';



const firebaseConfig = {
  apiKey: "AIzaSyC8MY-CGv-BsCzcNAxXrSJXsKtYTvg78gc",
  authDomain: "bootcamp-f93f1.firebaseapp.com",
  databaseURL: "https://bootcamp-f93f1-default-rtdb.firebaseio.com",
  projectId: "bootcamp-f93f1",
  storageBucket: "bootcamp-f93f1.appspot.com",
  messagingSenderId: "1088858161858",
  appId: "1:1088858161858:web:7563f85c6258be1943315b"
};

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);