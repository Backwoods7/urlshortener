var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(express.bodyParser());
var givenshort;
var longurl;
 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'urlshort',
 
});
 
connection.connect();
 
 
 app.get('/geturl', function(req, res) {
 
function BD(){
  var connection = mysql.createConnection(
   {user: 'root', password: 'password',host: 'localhost',database: 'urlshort'}); return connection; }
app.post("/newlongurl", function (req, res) {
      var objBD = BD();
      post = null;
var post={longurl:req.body.longurl};
 
  objBD.query('INSERT INTO longurl SET ?', post, function(error){
    if(error){
 
      console.log(error.message);
    }else{
      console.log('success');
}
   console.log(post.longurl);
connection.query('SELECT * FROM shorturl WHERE longurl = "' + post.longurl +' "', function (err, rows, result) {
longurl = rows[0].shorturl; 
sendThis = rows[0].shorturl;
console.log(sendThis);
res.send("<html> <head> </head> <body> <p> Your short url is here http://localhost:3000/" + sendThis + "</body> </html> ");
res.end();
  });
  });
});
});
 
 
 
var server = app.listen(3000, '127.0.0.1', function (req, res) {
        var host = server.address().address;
        var port = server.address().port;
    })
 
var test = function(req,response,next) {
givenshort = req.params.uid;
console.log(givenshort);
connection.query('SELECT * FROM shorturl WHERE shorturl = "' + givenshort +' "', function (err, rows, result) {
longurl = rows[0].longurl; 
console.log(longurl); 
console.log("testi");
var longcheck = unescape(longurl.slice(0,7));
var longcheck2 = unescape(longurl.slice(0,8));
console.log(longcheck);
if (longcheck == "http://") {
{response.writeHead(302, {
  'Location': unescape(longurl)
});}
}
 
else if (longcheck2 == "https://") {
{response.writeHead(302, {
  'Location': unescape(longurl)
});}
}
 
else {
response.writeHead(302, {
  'Location': "http://" + unescape(longurl)
});
}
 
response.end();
 
});
}
 
app.get('/:uid',test);
