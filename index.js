var app = require('express')();  //请求模块，构造对象一步到位
var http = require('http').Server(app);

var io = require('socket.io')(http); //Initialize a new instance of socket.io by passing the http (the HTTP server) object. 

app.get('/', function(req, res){   //express 路由
  res.sendfile('index.html');
});

io.on('connection', function(socket){     //监听connection事件
  socket.on('chat message', function(msg){    //收到消息之后，分发！
    io.emit('chat message', msg);  
  });
});

http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){  //保证监听正确的ip和端口
  var addr = http.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});   