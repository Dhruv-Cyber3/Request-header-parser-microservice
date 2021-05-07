const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const ip = req.ip.slice(7);
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.json({
    ipaddress: ip,
    language,
    software,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
