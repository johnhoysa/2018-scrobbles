!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.querySelector("header"),document.querySelector("section");var n=new XMLHttpRequest;n.open("GET","http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jhoysa&api_key=2415395c4acbe6c072c34ed1ccb9f676&format=json&limit=5"),n.responseType="text",n.send(),n.onload=function(){var e=n.response;!function(e){let t=e.topalbums;for(var n=0;n<t.album.length;n++)displayAlbums.innerHTML+=`\n      <div class='album'>\n        <img src="${t.album[n].image[3]["#text"]}" alt="cover art for" width="" height ="">\n        <p>Album Name: ${t.album[n].name}</p>\n        <p>artist Name: ${t.album[n].artist.name}</p>\n      </div>\n      `,console.log(t.album[n].image[2]["#text"])}(JSON.parse(e))}}]);