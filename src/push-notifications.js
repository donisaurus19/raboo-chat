import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '967460356619' 
  });
}

export const askForPermission = async () => {
    const messaging = firebase.messaging();
    messaging
    .requestPermission()
    .then(() => {
       return messaging.getToken();
    })
    .then(token => {
        console.log("User Token:", token);
        
    //    sendTokenToServer(token);
    })
    .catch(error => {
        if (error.code === "messaging/permission-blocked") {
            console.log("Anda Harus Unblock Notification Request");
        } else {
            console.log("Error", error);
        }
    });
}