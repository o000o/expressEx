var users = require('./users');
var app = require('express')();

var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//home
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

//home/index
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});


app.get('/user', function (req, res) {
    res.json(users.findAll());
});

//http://localhost:7777/user/3
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.post('/newuser', function (req, res) {
    var json = req.body;
    console.log(json);
    res.send('Add new ' + json.name + ' Completed!');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});