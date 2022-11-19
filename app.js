const express = require("express");
const app = express();

const port = 5000;

app.use("/", function (req, res, next) {
  const d = new Date();
  const day = d.getDay();
  const hour = d.getHours();

  if (day >= 1 && day <= 6 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.status(500).send("page not found");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/home.html");
});

app.get("/contactus", (req, res) => {
  res.sendFile(__dirname + "/pages/contactus.html");
});

app.get("/ourservice", (req, res) => {
  res.sendFile(__dirname + "/pages/ourservice.html");
});

app.listen(port, () => console.log(`server run on ${port}`));
