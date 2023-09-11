const express = require("express");
const cors = require("cors");

const getFBInfo = require("@xaviabot/fb-downloader");

const app = express();
const port = 3000;

app.use(cors());

// Functions
async function printFBInfo() {
  try {
    const result = await getFBInfo("https://fb.watch/m_jEGodCb7/");
    return result;
    // console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

app.get("/", async (req, res) => {
  // const resultData = await printFBInfo();
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
