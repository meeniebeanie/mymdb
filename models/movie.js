var mongoose = require('mongoose');

//defining mongoose schema
// // var Schema = mongoose.Schema;
// // schema = organization of data --> blueprint- constructor- fields

// this is the movie constructore
var movieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  published_year: Number,
  director: String,
  actor: String,
  published: {
    type: String,
    default: 'MGM'
  },
  created_at: {
    type: Date,
    default: Date.now
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

movieSchema.set('toJSON', { getters: true });

//register the schema (constructor) in mongoose
var Movie = mongoose.model('Movie', movieSchema);

//export the constructor to controller.js
module.exports = Movie;
