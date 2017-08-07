
var logger = require('morgan')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var firebase = require("firebase");

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')

 //gapi.load("auth:client,drive-realtime,drive-share", callback);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(logger('dev'))

app.get('/', function(request, response) {
    response.render('home.ejs')
})

    
    app.get('/docs', function(request, response) {
    response.render('docs.ejs')
})

  app.get('/math', function(request, response) {
    response.render('math330.ejs')
})


  app.get('/history', function(request, response) {
    response.render('history.ejs')
})

app.get('/english', function(request, response) {
    response.render('english.ejs')
})

app.get('/science', function(request, response) {
    response.render('science.ejs')
})

var port= process.env.PORT||8080
app.listen(port, function(){
        console.log(`App running on ${port}.`)
})




// Your Quizlet Client ID (used for public and user access):
// gkNv4HjHKC

// Your Secret Key (used for user authentication only):
// MupMdrAagktbnHPvqTZVTk (reset)
// Your Redirect URI:
// https://dont-tell-abasquiat20.c9users.io/?_c9_id=livepreview1&_c9_host=https://ide.c9.io (double-click to edit) 

