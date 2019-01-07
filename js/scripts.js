//Create variable for json data
const jsonAlbums =
  "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=5";

var request = new XMLHttpRequest();
request.open("GET", jsonAlbums);
request.responseType = "json";
request.send();
request.onload = function() {
  var myAlbums = request.response;
  for (i = 0; i < myAlbums.topalbums.album.length; i++) {
    console.log(myAlbums.topalbums.album[i].name);
  }
};
