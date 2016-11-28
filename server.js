var express = require('express'),
    app = express();
var path = require('path');

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

// disable layout
//app.set("view options", {layout: false});
//
//app.engine('html', require('ejs').renderFile);

app.set('port', process.env.PORT || 5000);
console.log('IN APP PATH: ', __dirname);
app.set('views', path.join(__dirname, '/www'));
//app.use(express.static(__dirname + '/www'));
app.set('view engine', 'ejs');
//app.set('port', 11000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.post('/', function(sReq, sRes){
    sRes.render('index');
});
