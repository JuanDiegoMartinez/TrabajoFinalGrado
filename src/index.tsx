import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

import 'firebase/storage';

firebase.initializeApp({
    apiKey: "AIzaSyA6qoh-6dUQXDYHrPnE8SAEC5Qsyn5JO14",
    authDomain: "basedatosfinal-495d6.firebaseapp.com",
    databaseURL: "https://basedatosfinal-495d6.firebaseio.com",
    projectId: "basedatosfinal-495d6",
    storageBucket: "basedatosfinal-495d6.appspot.com",
    messagingSenderId: "508286496362",
    appId: "1:508286496362:web:729e4757b366bd58222413",
    measurementId: "G-YQ1L0RQV5P"
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
