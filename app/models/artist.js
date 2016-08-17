var mongoose = require('mongoose');

//This is the artist constructor
var artistSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    trim: true
  },
  website: {
    type: String,
    trim: true,
    //getter and setter modifier
    get: function(url) {
      //if there is not url input, don't do anything
      if(! url) return url;

      if(
        url.indexOf('http://') !== 0 &&
        url.indexOf('https://') !== 0
      ) {
        url = 'http://' + url;
      }
      return url;
    }
  }
});

artistSchema.set('toJSON', {getters: true});

//register schema
var Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
