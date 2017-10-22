import React, { Component } from "react";
import PropTypes from "prop-types";
import keys from "ramda/src/keys";
import zipObj from "ramda/src/zipObj";
import _values from "ramda/src/values";
import pluck from "ramda/src/pluck";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Card from "../Card";
import { Doughnut } from "react-chartjs-2";
import Select from "material-ui/Select";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

const googleApiTypes = [
  "",
  "cafe",
  "accounting",
  "airport",
  "amusement park",
  "aquarium",
  "art gallery",
  "atm",
  "bakery",
  "bar",
  "bank",
  "beauty salon",
  "bicycle store",
  "book store",
  "bowling alley",
  "bus station",
  "campground",
  "car dealer",
  "car rental",
  "car repair",
  "car wash",
  "casino",
  "cemetery",
  "church",
  "city hall",
  "clothing store",
  "convenience store",
  "courthouse",
  "dentist",
  "department store",
  "doctor",
  "electrician",
  "electronics store",
  "embassy",
  "fire station",
  "florist",
  "funeral home",
  "furniture store",
  "gas station",
  "gym",
  "hair care",
  "hardware store",
  "hindu temple",
  "home goods store",
  "hospital",
  "insurance agency",
  "jewelry store",
  "laundry",
  "lawyer",
  "library",
  "liquor store",
  "local government office",
  "locksmith",
  "lodging",
  "meal delivery",
  "meal takeaway",
  "mosque",
  "movie rental",
  "movie theater",
  "moving company",
  "museum",
  "night club",
  "painter",
  "park",
  "parking",
  "pet store",
  "pharmacy",
  "physiotherapist",
  "plumber",
  "police",
  "post office",
  "real estate agency",
  "restaurant",
  "roofing contractor",
  "rv park",
  "school",
  "shoe store",
  "shopping mall",
  "spa",
  "stadium",
  "storage",
  "store",
  "subway station",
  "synagogue",
  "taxi stand",
  "train station",
  "transit station",
  "travel agency",
  "university",
  "veterinary care",
  "zoo"
];

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "94vh",
    width: "100%"
  },
  charts: {
    width: "95%",
    display: "flex",
    justifyContent: "space-around"
  },

  inputContainer: {
    margin: "60px 15px",
    display: "flex",
    alignSelf: "center",
    borderRadius: "3px",
    boxShadow: "1px 1px 3px 3px rgba(0,0,0,0.15)",
    backgroundColor: "#F5F5F5",
    width: "95%"
  },
  input: {
    alignSelf: "flex-start",
    fontSize: "2vh",
    display: "flex",
    textAlign: "center",
    width: "90%",
    height: "50px",
    margin: "15px"
  },
  button: {
    alignSelf: "flex-end",
    margin: theme.spacing.unit
  },
  resultsBox: {
    margin: "10px",
    textAlign: "center",
    borderRadius: "3px",
    boxShadow: "1px 1px 3px 3px rgba(0,0,0,0.15)",
    backgroundColor: "#F5F5F5",
    width: "100%"
  },
  select: {
    width: "100%"
  },
  info: {
    textAlign: "left",
    marginLeft: "3%"
  }
});

const defaultData = {
  labels: ["positives", "negatives", "neutral"],
  datasets: [
    {
      data: [10, 10, 10],
      backgroundColor: ["green", "red", "grey"]
    }
  ]
};

const defaultTweetData = {
  labels: ["anger", "disgust", "fear", "joy", "sadness"],
  datasets: [
    {
      data: [10, 10, 10, 10, 10],
      backgroundColor: ["red", "purple", "grey", "yellow", "blue"]
    }
  ]
};

const defaultNodeData = {
  labels: ["Anger", "Disgust", "Fear", "Hapinness", "Sadness", "Surprise"],
  datasets: [
    {
      data: [10, 10, 10, 10, 10, 10],
      backgroundColor: ["red", "purple", "grey", "yellow", "blue", "orange"]
    }
  ]
};

class Home extends Component {
  state = {};
  showGlobalChart = id => {
    fetch(`http://api.grascent.tk/api/watson/news/${encodeURIComponent(id)}`)
      .then(data => data.json())
      .then(data => {
        defaultData.datasets[0].data = [
          data.positives,
          data.negatives,
          data.neutral
        ];
        defaultData.response = data;
        return this.setState({ id, data: defaultData });
      })
      .then(() => fetch(`http://api.grascent.tk/api/twitter/search/${id}/tone`))
      .then(data => data.json())
      .then(data => data.documentTone.toneCategories[0])
      .then(arr => {
        const labels = pluck("toneId", arr.tones);
        const data = pluck("score", arr.tones);
        defaultTweetData.datasets[0].data = data;
        defaultTweetData.response = zipObj(labels, data);
        return this.setState({ dataTweet: defaultTweetData });
      });
  };

  handleSubmit = () => {
    const { location, type } = this.state;
    fetch(`http://nodeapi.grascent.tk/places?type=${type}&location=${location}`)
      .then(data => data.json())
      .then(data => {
        const labels = keys(data.data.sentiments);
        const values = _values(data.data.sentiments);
        defaultNodeData.datasets[0].data = values;
        defaultNodeData.response = zipObj(labels, values);
        return this.setState({
          ratings: data.data.ratings,
          defaultNodeData: defaultNodeData
        });
      });
  };

  componentDidMount() {
    window.setState = e => this.setState(e);
    var input = document.getElementById("autocomplete");
    var options = {
      types: ["(cities)"],
      componentRestrictions: { country: "gr" }
    };
    window.autocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );

    window.google.maps.event.addListener(
      window.autocomplete,
      "place_changed",
      function() {
        var place = window.autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        window.setState({ location: `${lat},${lng}` });
      }
    );
  }

  render() {
    const { classes } = this.props;
    const { id, type, ratings = 5 } = this.state;
    const data = this.state.data || defaultData;
    const dataTweet = this.state.dataTweet || defaultTweetData;
    const dataNode = this.state.defaultNodeData || defaultNodeData;
    return (
      <div className={classes.root}>
        <div className={classes.inputContainer}>
          <TextField
            id="name"
            label="Name"
            onBlur={e => this.showGlobalChart(e.target.value)}
            className={classes.input}
            margin="normal"
          />
          <FormControl className={classes.input}>
            <InputLabel htmlFor="age-native-simple">Type</InputLabel>
            <Select
              native
              onChange={e => this.setState({ type: e.target.value })}
              value={this.state.age}
              input={<Input id="age-native-simple" />}
            >
              {googleApiTypes.map(e => <option value={e}>{e}</option>)}
            </Select>
          </FormControl>

          <TextField
            id="autocomplete"
            label="Area"
            className={classes.input}
            margin="normal"
          />
          <Button
            onClick={() => this.handleSubmit()}
            raised
            className={classes.button}
          >
            Search
          </Button>
        </div>
        {true && (
          <div className={classes.charts}>
            <div className={classes.resultsBox}>
              <h1>Global news</h1>
              <Doughnut
                options={{ legend: { position: "bottom" } }}
                data={data}
                width={window.innerWidth * 0.2}
                height={300}
              />
              {data.response &&
                keys(data.response).map(k => (
                  <h3>{`${k}: ${data.response[k]}`}</h3>
                ))}
            </div>

            <div className={classes.resultsBox}>
              <h1>Ratings Nearby</h1>

              <Doughnut
                options={{ legend: { position: "bottom" } }}
                data={dataNode}
                width={window.innerWidth * 0.2}
                height={300}
              />
              {true &&
                keys(dataNode.response).map(k => (
                  <h3>{`${k}: ${dataNode.response[k]}`}</h3>
                ))}
            </div>
            <div className={classes.resultsBox}>
              <h1>Company Tweets</h1>

              <Doughnut
                options={{ legend: { position: "bottom" } }}
                data={dataTweet}
                width={window.innerWidth * 0.2}
                height={300}
              />
              {dataTweet.response &&
                keys(dataTweet.response).map(k => (
                  <h3>{`${k}: ${(+dataTweet.response[k] * 100).toFixed(
                    2
                  )}%`}</h3>
                ))}
            </div>

            <div className={classes.resultsBox}>
              <h1>Rates: {id}</h1>
              <img
                style={{ width: "75%", position: "relative" }}
                src="/star.png"
              />
              <h1>{+ratings.toFixed(1)}/5</h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
