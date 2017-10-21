const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017/sentiments";
const PORT = 3333;

const {
  add,
  compose,
  divide,
  flip,
  map,
  values,
  pick,
  chain,
  tap,
  sum,
  range
} = require("ramda");
const sayX = x => console.log(x);
const say = tap(sayX);
const fDivide = flip(divide);

const app = express();

const Anger = range(1, 5).map(i => `Anger${i}`);
const Disgust = range(1, 5).map(i => `Disgust${i}`);
const Fear = range(1, 5).map(i => `Fear${i}`);
const Happiness = range(1, 5).map(i => `Happiness${i}`);
const Sadness = range(1, 5).map(i => `Sadness${i}`);
const Surprise = range(1, 5).map(i => `Surprise${i}`);

const feelings = [
  ["Anger", Anger],
  ["Disgust", Disgust],
  ["Fear", Fear],
  ["Happiness", Happiness],
  ["Sadness", Sadness],
  ["Surprise", Surprise]
];

app.get("/f", (request, response) => {});

mongo.connect(mongoUrl, (err, db) => {
  if (err) {
    console.log("error in connecting mongo");
  } else {
    db.collection("lexicon").createIndex({ Term: "text" }, (err, result) => {
      if (err) {
        console.log("error in adding index");
      } else {
        const results = [];
        db
          .collection("lexicon")
          .find({ $text: { $search: "αγαπώ" } })
          .toArray((err, docs) => {
            if (err) {
              console.log("err in find");
            } else {
              const fls = feelings.map(f => ({
                [f[0]]: compose(
                  fDivide(4),
                  sum,
                  chain(values),
                  map(pick(f[1]))
                )(docs)
              }));
            }
          });
      }
    });
  }
});

app.listen(PORT, err => {
  console.log(`started on port: ${PORT}`);
});
