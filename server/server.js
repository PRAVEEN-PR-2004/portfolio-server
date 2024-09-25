console.log("helo");

const express = require("express");
const app = express();
const dbcon = require("./config/db");
const Projects = require("./routers/projectRouter");
const Users = require("./routers/userRouter");
app.use(express.json());
const port = 7777;
app.use("/projects", Projects);
app.use("/user", Users);
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
app.listen(port, () => {
  console.log("server is running");
});
