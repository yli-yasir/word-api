const express = require("express");
const WordPos = require("wordpos");
const cors = require("cors");

require("dotenv").config();

const app = express();
const wordpos = new WordPos();

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.get("/lookup/:word", async (req, res, next) => {
  let result = [];
  try {
    result = await wordpos.lookup(req.params.word);
  } catch (e) {
    next(e);
  }
  res.json(result);
});

app.listen(process.env.PORT, () =>
  console.log(`app started on ${process.env.PORT}!`)
);
