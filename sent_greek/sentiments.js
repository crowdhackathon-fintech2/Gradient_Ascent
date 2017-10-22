const {
  compose,
  divide,
  flip,
  filter,
  map,
  merge,
  values,
  pick,
  tap,
  sum,
  range,
  reduce
} = require("ramda");

const sayX = x => console.log(x);
const say = tap(sayX);
const fDivide = flip(divide);
const numOrZero = x => (isNaN(parseInt(x, 10)) ? 0 : x);

const sentiments = [
  "Anger",
  "Disgust",
  "Fear",
  "Happiness",
  "Sadness",
  "Surprise"
];

const sentimentsValues = reduce(
  (acc, s) => merge(acc, { [s]: range(1, 5).map(i => `${s}${i}`) }),
  {}
)(sentiments);

const aggr = x => compose(fDivide(4), sum, map(numOrZero), values, pick(x));

const makeGetSentimentsForTerm = db => searchTerm => {
  // console.log("searchTerm", searchTerm);
  return new Promise((resolve, reject) => {
    db
      .collection("lexicon")
      .find({ $text: { $search: searchTerm } })
      .toArray((err, docs) => {
        // console.log("docs", docs);
        if (err) {
          reject(err);
        } else {
          const aggregated = docs.length
            ? map(doc => ({
                Anger: aggr(sentimentsValues["Anger"])(doc),
                Disgust: aggr(sentimentsValues["Disgust"])(doc),
                Fear: aggr(sentimentsValues["Fear"])(doc),
                Happiness: aggr(sentimentsValues["Happiness"])(doc),
                Sadness: aggr(sentimentsValues["Sadness"])(doc),
                Surprise: aggr(sentimentsValues["Surprise"])(doc)
              }))(docs)
            : null;
          resolve(aggregated);
        }
      });
  });
};

module.exports = {
  aggr,
  sentimentsValues,
  makeGetSentimentsForTerm
};
