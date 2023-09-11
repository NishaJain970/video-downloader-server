const express = require("express");
const app = express();
const port = 3000;

const getFBInfo = require("@xaviabot/fb-downloader");
const cors = require("cors");

app.use(cors());

// functions

async function printFBInfo(video) {
  try {
    const result = await getFBInfo(video);
    return result;
    // console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

app.get("/api", (req, res) => {
  res.send("Hello Video Downloader API !");
});

app.get("/api/fb", async (req, res) => {
  const video = req.query.video;
  // console.log(video);
  const resData = await printFBInfo(video);
  res.json(resData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
