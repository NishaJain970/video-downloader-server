import express from "express";
import cors from "cors";
import getFBInfo from "@xaviabot/fb-downloader";
import { snapsave } from "snapsave-media-downloader";

const app = express();
const port = 3001;

app.use(cors());

async function printFBInfo(video) {
  try {
    const result = await getFBInfo(video);
    return result;
  } catch (error) {
    console.log("Error:", error);
  }
}

async function fetchInstagramMedia(url) {
  try {
    const download = await snapsave(url);

    if (download.status === true) {
      const res = {
        data: [
          {
            url: download?.data?.length > 0 ? download.data[0].url : "",
          },
        ],
      };

      return res;
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
}

app.get("/api", (req, res) => {
  res.send("Hello Video Downloader API !");
});

app.get("/api/fb", async (req, res) => {
  const video = req.query.video;
  const resData = await printFBInfo(video);
  res.json(resData);
});

app.get("/api/insta", async (req, res) => {
  const link = req.query.link;
  let resData = await fetchInstagramMedia(link);
  res.json(resData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
