const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;

const { aggr, sentimentsValues } = require("./sentiments");
const { map } = require("ramda");
const endpoints = require("./endpoints");

/*
  import tsv mongo:
  cd in this dir and run
  mongoimport --db sentiments --collection lexicon --type tsv --headerline --file greek_sentiment_lexicon.tsv
*/

// constants
const mongoUrl = "mongodb://localhost:27017/sentiments";
const PORT = 3333;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const wordsToTry = ["αγαπώ", "κακός"];

var requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);

const dbContext = db => (req, res, next) => {
  req.db = db;
  next();
};

mongo.connect(mongoUrl, (err, db) => {
  if (err) {
    console.log("error in connecting mongo");
  } else {
    db.collection("lexicon").createIndex({ Term: "text" }, (err, result) => {
      if (err) {
        console.log("error in adding index");
      } else {
        app.use(dbContext(db));
        app.use(endpoints);
        app.listen(PORT, err => {
          console.log(`started on port: ${PORT}`);
        });
      }
    });
  }
});
