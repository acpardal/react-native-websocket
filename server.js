var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  setInterval(() => {
    let msg = [
      {name: 'ETH', 'age': Math.floor(Math.random() * 100) },
      {name: 'BTC', 'age': Math.floor(Math.random() * 100) },
      {name: 'EOS', 'age': Math.floor(Math.random() * 100) },
      {name: 'XRP', 'age': Math.floor(Math.random() * 100) },
      {name: 'BCH', 'age': Math.floor(Math.random() * 100) }
    ]
    socket.emit('chat message', msg);
  }, 1000);
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});