var Artist = require('mongoose').model('Artist');

module.exports = {
  index: function(req, res, next) {
    Artist.find({}, function(err, artists) {
      //this function is a callback. find out why.
      if(err) next(err);
      res.json(artists);
    });
  },

  create: function(req, res, next) {
    var new_artist = new Artist(req.body);
    new_artist.save(function(err){
      if (err) return next(err);
      res.json(new_artist);
    });
  }

  show: function(req, res, next) {
   var artist_id = req.params.artist_id;
   res.send('artist_id is '+ artist_id)
    // Artist.findOne({
    //   _id: artist_id
    // }, function(err, artist) {
    //   if(err) return next(err);
    //   res.json(artist)
    // });
  }
};
