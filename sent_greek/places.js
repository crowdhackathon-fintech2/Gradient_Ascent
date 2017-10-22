const contains = require("ramda/src/contains");
const compose = require("ramda/src/compose");
const converge = require("ramda/src/converge");
const divide = require("ramda/src/divide");
const fetch = require("node-fetch");
const flatten = require("ramda/src/flatten");
const filter = require("ramda/src/filter");
const length = require("ramda/src/length");
const map = require("ramda/src/map");
const pathOr = require("ramda/src/pathOr");
const pluck = require("ramda/src/pluck");
const prop = require("ramda/src/prop");
const toLower = require("ramda/src/toLower");
const sum = require("ramda/src/sum");

// constants
// const APIKEY = "AIzaSyDAGIHcE14WM4yL7B5gH_8keU-I4P6octU";
const APIKEY = "AIzaSyCy66N31imNV__T2_V-5ccvdeZgsNu3EG4";

const keepArr = ["noun", "adjective"];

const detailsUrl =
  "https://maps.googleapis.com/maps/api/place/details/json?placeid=";

const _location = `38.0023926,23.6692058`;
const _type = "cafe";

const nearbyUrl = ({ location, type }) =>
  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=distance&types=${type}&key=${APIKEY}`;
const makeDetailsEndpoints = ids =>
  map(id => `${detailsUrl}${id}&key=${APIKEY}`)(ids);

const getReviewsText = compose(
  filter(Boolean),
  map(prop("text")),
  pathOr([], ["result", "reviews"])
);

const average = converge(divide, [sum, length]);

const fetchDetails = endpoint =>
  fetch(endpoint)
    .then(e => e.json())
    .then(detail => {
      return {
        reviews: getReviewsText(detail),
        rating: detail.result ? detail.result.rating : ""
      };
    })
    .catch(err => {
      console.log("ERROR", err);
    });

const dumpResults = () => Promise.resolve(require("./results_dump").results);

const getNearByRatings = ({ location = _location, type = _type }) => {
  let ratings = [];
  // return dumpResults()
  return fetch(nearbyUrl({ location, type }))
    .then(e => e.json())
    .then(res => res.results)
    .then(pluck("place_id"))
    .then(makeDetailsEndpoints)
    .then(endpoints => {
      return Promise.all(endpoints.map(fetchDetails));
    })
    .then(details => {
      ratings = compose(filter(Boolean), map(d => d.rating))(details);
      return map(d => d.reviews)(details);
    })
    .then(arr => flatten(arr))
    .then(flt => {
      return Promise.all(
        flt.map(txt =>
          fetch(
            `https://ai-tools.herokuapp.com/beta?apikey=786QVseeZEOhL63AhTwD7PBeFTJ6Cc&text=${encodeURIComponent(
              txt
            )}`
          )
            .then(e => e.json())
            .then(b =>
              b.sentence.filter(
                t => contains(t.lexical, keepArr) && t.word.length > 2
              )
            )
        )
      ).then(e => {
        return {
          ratings: average(ratings),
          terms: map(e => toLower(e.word), flatten(e))
        };
      });
    })
    .catch(err => null);
};

module.exports = {
  getNearByRatings
};
