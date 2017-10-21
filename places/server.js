const pluck = require('ramda/src/pluck');
const flatten = require('ramda/src/flatten');
const map = require('ramda/src/map');
const GooglePlaces = require('node-googleplaces');
const places = new GooglePlaces('AIzaSyBOtH7FSTjo9DE-uEVOnCr9N_4U6mDZ_88');
const fetch = require('node-fetch');
const ratings = []
const text = []

const origin = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='
const APIKEY = 'AIzaSyDAGIHcE14WM4yL7B5gH_8keU-I4P6octU'
const location =`38.0023926,23.6692058`
const type = 'cafe'
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=distance&types=${type}&key=${APIKEY}`

fetch(url)
  .then(e => e.json())
  .then(res =>
    pluck('place_id',res.results))
  .then(ids => ids.map(id =>  `${origin}${id}&key=${APIKEY}`))
  .then(endpoints => {
    return Promise.all(
      endpoints.map(endpoint =>{
      return fetch(endpoint)
        .then(e => e.json())
        .then(b => {
          ratings.push(b.result.rating)
          return b.result.reviews.map(d => d.text).filter(txt => txt !== '');
        }).catch(err => null)
      }))
  }).then(arr => flatten(arr)).then(flt => console.log(flt)).catch(err => null)
