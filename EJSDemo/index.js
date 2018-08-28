var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: "Testing", author: "Test"},
        ];
    
    res.render("posts", {posts: posts});
});

var friends = ["Tony", "Bobby", "Steph"];

app.get('/friends', function(req, res) {
   res.render('friends', {friends: friends});
});

app.post('/addfriend', function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('friends');
});

app.get('/fall/:thing', function(req, res) {
    var thing = req.params.thing.toUpperCase();
    res.render("fall", {thing: thing});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listing.");
});