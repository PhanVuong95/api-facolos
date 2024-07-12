const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute = require("./postRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to database
mongoose
  .set("strictQuery", true)
  .connect(
    "mongodb+srv://chiatayroiemhanhphucnhe:9fXRi93noHE4cgQU@cluster0.7vxwvfv.mongodb.net/facolospickleball-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Kết nối db thành công"))
  .catch((error) => console.log(error));

// Router
app.use("/api", postRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
