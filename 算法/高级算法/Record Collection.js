
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var data = collectionCopy[id];
  if (data != undefined) {
    if (value == "") {
      delete data[prop];
    } else if (prop == "tracks") {
      var track = data[prop];
      if (track != undefined) {
        track.push(value);
      } else {
        data.tracks = [];
        data.tracks.push(value);
      }
    } else if (prop == "artist") {
      data.artist = value;
    }
  }
  collection = collectionCopy;
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "Take a Chance on Me");
