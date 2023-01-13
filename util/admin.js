
var admin = require("firebase-admin");

var serviceAccount = require("../admin-portal-806dd-firebase-adminsdk-x20p7-0a7bcd13fe.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };
