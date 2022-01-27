const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 4567;
const MONGODB_URL = "mongodb://localhost:27017/test";

const apiRoutes = require("./routes");

async function main() {
  mongoose.connect(MONGODB_URL);

  const connection = mongoose.connection;

  connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
  });

  app.use(express.json());

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
  });
}

main().catch(console.log);
