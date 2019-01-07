// /assets/js/data.json
// http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=300

// topalbums
// album
// name
// artist.name

//Create variable for json data
const jsonAlbums =
  "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=5";

const getWeather =
  "http://api.openweathermap.org/data/2.5/weather?zip=78729,us&APPID=74162c2c384d50a41476e0e0e2990cd6";

const toDos = "https://jsonplaceholder.typicode.com/todos/5";

var superhero =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// var request = new XMLHttpRequest();

// request.open("GET", getWeather);

// request.responseType = "json";
// request.send();
// request.onload = function() {
//   var localWeather = request.response;
//   console.log(localWeather.main.temp);
// };

var request = new XMLHttpRequest();
request.open("GET", jsonAlbums);
request.responseType = "json";
request.send();
request.onload = function() {
  var myAlbums = request.response;

  // var albumNames = myAlbums.topalbums.album[0].name;
  // console.log("first album is " + albumNames);

  for (i = 0; i < myAlbums.topalbums.album.length; i++) {
    console.log(myAlbums.topalbums.album[i].name);
  }
};

// get data
// fetch(jsonAlbums)
//   .then(resp => resp.json())
//   .then(function(data) {
//     let myTopAlbums = data.results;
//     console.log(myTopAlbums);
//     return myTopAlbums.map(function(topalbums) {
//       console.log("hmm");
//     });
//   })
//   .catch(function(error) {
//     console.log("Well, spit, there was an error and then some.");
//   });

// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const ul = document.getElementById("authors");

// const url = "https://randomuser.me/api/?results=10";

//Works
// fetch(url)
//   .then(resp => resp.json())
//   .then(function(data) {
//     let authors = data.results;
//     return authors.map(function(author) {
//       console.log(author.name.first);
//     });
//   })
//   .catch(function(error) {
//     console.log(JSON.stringify(error));
//   });

//Works
// fetch(url)
//   .then(resp => resp.json())
//   .then(function(data) {
//     let myTopAlbums = data.results;
//     return myTopAlbums.map(function(myAlbums) {
//       console.log(myAlbums);
//     });
//   })
//   .catch(function(error) {
//     console.log(JSON.stringify(error));
//   });

// fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// )
//   .then(resp => resp.json())
//   .then(function(data) {
//     let austinWeather = data.results;
//     return austinWeather.map(function(weather) {
//       console.log(weather);
//     });
//   })
//   .catch(function(error) {
//     console.log(JSON.stringify(error));
//   });
