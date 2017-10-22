const express = require("express");
const { getNearByRatings } = require("./places");
const { makeGetSentimentsForTerm } = require("./sentiments");
const {
  add,
  compose,
  divide,
  filter,
  flatten,
  flip,
  length,
  map,
  mergeWith,
  isNil,
  not,
  reduce
} = require("ramda");

const flipDivide = flip(divide);

const endpoints = (module.exports = express.Router());

endpoints.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

// example url: http://localhost:3333/places?type=cafe&location=38.0023926,23.6692058
endpoints.get("/places", (req, res) => {
  const { db, query = {} } = req;
  const { location, type } = query;
  console.log("params", { location, type });
  const getSentimentsForTerm = makeGetSentimentsForTerm(db);
  let ratings = 0;
  getNearByRatings({ location, type })
    .then(({ ratings: _ratings, terms = [] }) => {
      ratings = _ratings;
      return Promise.all(terms.map(getSentimentsForTerm));
    })
    .then(rr => {
      const filtered = compose(flatten, filter(r => !isNil(r)))(rr);
      console.log("filtered", filtered.length);
      const reduced = compose(
        map(flipDivide(filtered.length)),
        reduce((acc, x) => mergeWith(add, acc, x), {})
      )(filtered);
      console.log("reduced", reduced);
      res.json({
        data: {
          sentiments: reduced,
          ratings
        }
      });
    })
    .catch(err => {
      console.log("ERROR", err);
      res.json({ data: {} });
    });
});
