!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){document.querySelector("header"),document.querySelector("section");var r=new XMLHttpRequest;r.open("GET","http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=50"),r.responseType="text",r.send(),r.onload=function(){var e=r.response;!function(e){let t=e.topalbums;for(var r=0;r<t.album.length;r++)""==t.album[r].image[3]["#text"]?imageSource="https://fillmurray.com/300/300":imageSource=t.album[r].image[3]["#text"],displayAlbums.innerHTML+=`\n      <div class='album'>\n        \n        <img src="${imageSource}" alt="cover art for" width="" height ="">\n\n        <p>Album Name: ${t.album[r].name}</p>\n        <p>artist Name: ${t.album[r].artist.name}</p>\n      </div>\n      `,console.log(t.album[r].image[2]["#text"])}(JSON.parse(e))}}]);