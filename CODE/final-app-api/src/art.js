const { connectDb } = require("./connectDb");

exports.getArt = (request, response) => {
  const db = connectDb();
  db.collection("art")
    .get() // this is how we will GET our 'strategies' collection from db
    .then((snapshot) => {
      // capturing 'strategies' in the snapshot, getting ALL the strategies
      const artList = snapshot.docs.map((doc) => {
        let art = doc.data();
        art.id = doc.id;
        return art; // we expect to get an empty array
      });
      response.send(artList);
    })
    .catch((err) => response.status(500).send(err));
};
