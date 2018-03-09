'use strict';

var photoCycle = document.getElementById('indexPictures');
var usedPictures = ['chinook.jpg', 'cutter.jpeg', 'family.jpg', 'fish.jpg', 'frosted-cookie.jpg', 'salmon.png', 'shirt.jpg'];

function random(arrayName) {
    var i = Math.floor(Math.random() * arrayName.length);
    var outcome = arrayName[i];
    return outcome;
  }

function changePhoto(event) {
  console.log('test event');
  var funcCall =  'img/' + random(usedPictures);
  photoCycle.src = funcCall;
}


photoCycle.addEventListener('click', changePhoto);
