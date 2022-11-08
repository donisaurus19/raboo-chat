const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.chatCreated = functions.firestore
  .document('chats/{chatId}')
  .onCreate(doc => {

    const chat = doc.data();
    const notification = {
      nama: `${chat.nama}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    
    return createNotification(notification);

});

