import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
  const resspons = await axios("https://newsapi.org/v2/everything", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "19a516fbcf6b464aa34a7017249d433c",
    },
    params: {
      q: req.query.q,
    },
  });
  res.send(resspons.data.articles || {});
});

app.listen(port, () => console.log(`App running on port ${port}`));
