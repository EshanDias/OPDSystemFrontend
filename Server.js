/**
 * Created by esh_d on 08/05/2017.
 */

var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var path = require('path');
// set our port
var port = process.env.PORT || 8080; 

app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public')); 

app.get('*', function(req, res) {
        res.sendFile('index.html',{root : path.join(__dirname + "" , '/public')}) // load our public/index.html file
    });


// start app ===============================================
app.listen(port);
console.log("server is running on localhost:8080");