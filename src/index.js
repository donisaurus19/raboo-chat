import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

//REDUX
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// FIREBASE
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
// import firebase from 'firebase'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('firebase-messaging-sw.js',)
//       .then(function (registration) {
//         firebase.messaging().useServiceWorker(registration);
//         console.log("This service worker is registered")
//       }).catch(function (err) {
//         console.log('Service worker registration failed, error:', err);
//       });
// }
serviceWorker.unregister();
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('firebase-messaging-sw.js',)
//       .then(function (registration) {
//         firebase.messaging().useServiceWorker(registration);
//         console.log("This service worker is registered")
//       }).catch(function (err) {
//         console.log('Service worker registration failed, error:', err);
//       });
// }
