//Create variable for json data
const requestTopAlbumsURL =
  "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=5";

const requestTopAlbums = new XMLHttpRequest();
requestTopAlbums.open("GET", requestTopAlbumsURL);
requestTopAlbums.responseType = "text";
requestTopAlbums.send();

requestTopAlbums.onload = function() {
  const myAlbumsText = requestTopAlbums.response;
  const myAlbums = JSON.parse(myAlbumsText);

  showAlbums(myAlbums);
};

function showAlbums(jsonObj) {
  const albumInfo = jsonObj["topalbums"];

  for (let i = 0; i < albumInfo.album.length; i++) {
    if (albumInfo.album[i].image[3]["#text"] == "") {
      imageSource = "https://fillmurray.com/300/300";
    } else {
      imageSource = albumInfo.album[i].image[3]["#text"];
    }

    displayAlbums.innerHTML += `
      <div class='display-albums__album'>
        <img class="display-albums__img" src="${imageSource}" alt="cover art for" width="" height ="">
        <p>Album Name: ${albumInfo.album[i].name}</p>
        <p>artist Name: ${albumInfo.album[i].artist.name}</p>
      </div>
      `;
    console.log(albumInfo.album[i].image[2]["#text"]);
  }
}
