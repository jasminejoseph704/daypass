const admin = require('firebase-admin');
const path = require('path');  // Add this to ensure the path resolves correctly

// Resolve the absolute path for the Firebase credentials
const serviceAccount = require(path.resolve(process.env.FIREBASE_CREDENTIALS_PATH));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'daypass-7c7c1.appspot.com', // Your Firebase bucket name
});

const bucket = admin.storage().bucket();
module.exports = bucket;
