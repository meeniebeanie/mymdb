var Movie = require('mongoose').model('Movie');

module.exports = {
  index: function(req, res, next) {
    Movie.find({}, function(err, movies) {
      //this function is a callback. find out why.
      if(err) next(err);
      res.json(movies);
    });
  },

  create: function(req, res, next) {
    var new_movie = new Movie(req.body);
    new_movie.save(function(err){
      if (err) return next(err);
      res.json(new_movie);
    });
  }
};
