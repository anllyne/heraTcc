const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '1:227935988480:web:4fe7ec3228b695a4dde1e5',
});

const db = admin.firestore();
module.exports = { admin, db };
