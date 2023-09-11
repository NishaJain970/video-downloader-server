const express = require("express");
const app = express();
const port = 3000;

const getFBInfo = require("@xaviabot/fb-downloader");

// functions

async function printFBInfo() {
  try {
    const result = await getFBInfo(
      "https://www.facebook.com/watch?v=272591278381388"
    );
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
  const resData = await printFBInfo();
  res.send(resData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
