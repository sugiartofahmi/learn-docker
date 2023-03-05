import express from "express";
import cors from "cors";
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "3",
      title: "Book Review: The Bear & The Nightingale",
    },
  ]);
});

app.listen(port, () => console.log(`App running on port ${port}`));
