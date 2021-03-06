var express = require('express')
var fs = require('fs')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var data = fs.readFileSync('./index.html')
  var dataString = data.toString()
  response.send(dataString)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
