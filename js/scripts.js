var header = document.querySelector("header");
var section = document.querySelector("section");

//Create variable for json data
const requestUrl =
  "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=5";

var request = new XMLHttpRequest();
request.open("GET", requestUrl);
request.responseType = "text";
request.send();

request.onload = function() {
  var myAlbumsText = request.response;
  var myAlbums = JSON.parse(myAlbumsText);

  //console.log(myAlbums.topalbums.album);
  showAlbums(myAlbums);
};

function showAlbums(jsonObj) {
  let albumInfo = jsonObj["topalbums"];
  //console.log(albumInfo);
  //console.log(albumInfo.album[0].name);
  for (var i = 0; i < albumInfo.album.length; i++) {
    var myPara1 = document.createElement("p");

    myPara1.textContent = "Album Name: " + albumInfo.album[i].name;

    header.appendChild(myPara1);
  }
}
