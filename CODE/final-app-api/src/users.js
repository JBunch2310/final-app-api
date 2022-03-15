const { FieldValue } = require("firebase-admin/firestore");
const { connectDb } = require("./connectDb");

exports.createUsers = (request, response) => {
  const newUser = {
    email: request.body.email,
    username: request.body.username,
    created_at: FieldValue.serverTimestamp(),
  };
  const db = connectDb();
  db.collection("strategies")
    .add(newUser)
    .then((doc) => response.status(201).send(doc.id))
    .catch((err) => response.status(500).send(err));
};
