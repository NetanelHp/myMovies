const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const path = require("path");

//Configs
require("dotenv").config({ path: "config/.env" });
connectDB();
app.use(express.json());
app.use(cors());

//Routes
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);

//Deploy
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
}

app.listen(PORT, console.log("App is running"));
