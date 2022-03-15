const express = require("express");
const cors = require("cors");
const { getArt } = require("./src/art.js");
const { createUsers, updateUsers } = require("./src/users.js");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// Routes
// app.post("/users", createUsers);
app.get("/art", getArt);

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});
