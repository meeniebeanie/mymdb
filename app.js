var mongoose = require('mongoose');
// require mongooseDB
var mongo_url = 'mongodb://localhost/mydb_db';

// Use native promises- use promise when you expect something else rather than getting a data
mongoose.Promise = global.Promise;
mongoose.createConnection(mongo_url);


// require movie constructor!
var Movie = require('./app/models/movie');

// require artist constructor
var Artist = require('./app/models/artist');

// require body-parser to retrieve post info
var bodyParser = require('body-parser');

//require express module
var express = require('express');


// run express
var app = express();

//set up the port
var port = 5000;
app.set('port', port);

// MIDDLEWARE: a middleman that sits between your requests and server
// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//list all movies
var moviesController = require('./app/controllers/movies.server.controller');

app.route('/movies')
   .get(moviesController.index)
   .post(moviesController.create);

//list all artists
var artistsController =
require('./app/controllers/artists.server.controller');

app.route('/artists')
   .get(artistsController.index)
   .post(artistsController.create);

app.route('/artists/:artist_id')
   .get(artistsController.show);

    //  function(req, res, next){
    // var artist_id = req.params.artist_id;
    // // res.send('artist_id is '+ artist_id)
    //  Artist.findOne({
    //    _id: artist_id
    //  }, function(err, artist) {
    //    if(err) return next(err);
    //    res.json(artist)
    //  });
   //}
 //);

// listening to the port
app.listen(app.get('port'), function(){
  console.log('running on port: ' + app.get('port'));
});
