{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":34},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":2},"end":{"row":13,"column":5},"action":"insert","lines":["socket.on('disconnect', function(){","    console.log('user disconnected');","  });"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["io.on('connection', function(socket){","  socket.on('chat message', function(msg){","    console.log('message: ' + msg);","  });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":3},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["io.on('connection', function(socket){","  console.log('a user connected');","  socket.on('disconnect', function(){","    console.log('user disconnected');","  });","});",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":42},"end":{"row":5,"column":43},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":43},"end":{"row":5,"column":44},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":44},"end":{"row":5,"column":45},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":45},"end":{"row":5,"column":47},"action":"insert","lines":["路由"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["io.on('connection', function(socket){","  socket.on('chat message', function(msg){","    console.log('message: ' + msg);","  });","});"]},{"start":{"row":9,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["io.on('connection', function(socket){","  socket.on('chat message', function(msg){","    io.emit('chat message', msg);","  });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":41},"end":{"row":9,"column":43},"action":"insert","lines":["监听"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":43},"end":{"row":9,"column":53},"action":"insert","lines":["connection"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":53},"end":{"row":9,"column":55},"action":"insert","lines":["事件"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":46},"end":{"row":10,"column":48},"action":"insert","lines":["收到"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":48},"end":{"row":10,"column":50},"action":"insert","lines":["消息"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["，"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"remove","lines":["，"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":50},"end":{"row":10,"column":52},"action":"insert","lines":["之后"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":["，"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":53},"end":{"row":10,"column":55},"action":"insert","lines":["分发"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"insert","lines":["！"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":34},"end":{"row":11,"column":35},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":35},"end":{"row":11,"column":36},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":36},"end":{"row":11,"column":37},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":37},"end":{"row":11,"column":39},"action":"insert","lines":["分发"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":39},"end":{"row":11,"column":40},"action":"insert","lines":["给"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":40},"end":{"row":11,"column":42},"action":"insert","lines":["所有"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":42},"end":{"row":11,"column":44},"action":"insert","lines":["用户"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":43},"end":{"row":11,"column":44},"action":"remove","lines":["户"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"remove","lines":["用"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":42},"end":{"row":11,"column":44},"action":"insert","lines":["连接"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":44},"end":{"row":11,"column":45},"action":"insert","lines":["着"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":44},"end":{"row":11,"column":45},"action":"remove","lines":["着"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":44},"end":{"row":11,"column":45},"action":"insert","lines":["者"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":3},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":37},"end":{"row":11,"column":45},"action":"remove","lines":["分发给所有连接者"]},{"start":{"row":18,"column":3},"end":{"row":19,"column":0},"action":"remove","lines":["",""]},{"start":{"row":11,"column":35},"end":{"row":11,"column":37},"action":"remove","lines":["//"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":4},"end":{"row":18,"column":3},"action":"remove","lines":[".listen(process.env.PORT, function(){","  var addr = http.address();","  console.log(\"Server listening at\", addr.address + \":\" + addr.port);","});"]},{"start":{"row":15,"column":4},"end":{"row":18,"column":3},"action":"insert","lines":[".listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){","  var addr = server.address();","  console.log(\"Server listening at\", addr.address + \":\" + addr.port);","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":78},"end":{"row":15,"column":79},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":79},"end":{"row":15,"column":80},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":80},"end":{"row":15,"column":81},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":81},"end":{"row":15,"column":82},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":82},"end":{"row":15,"column":83},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":83},"end":{"row":15,"column":84},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":84},"end":{"row":15,"column":85},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":84},"end":{"row":15,"column":85},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":83},"end":{"row":15,"column":84},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":82},"end":{"row":15,"column":83},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":82},"end":{"row":15,"column":84},"action":"insert","lines":["保证"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":84},"end":{"row":15,"column":86},"action":"insert","lines":["收到"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":85},"end":{"row":15,"column":86},"action":"remove","lines":["到"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":84},"end":{"row":15,"column":85},"action":"remove","lines":["收"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":84},"end":{"row":15,"column":86},"action":"insert","lines":["监听"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":86},"end":{"row":15,"column":87},"action":"insert","lines":["到"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":86},"end":{"row":15,"column":87},"action":"remove","lines":["到"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":86},"end":{"row":15,"column":88},"action":"insert","lines":["正确"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":88},"end":{"row":15,"column":89},"action":"insert","lines":["的"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":89},"end":{"row":15,"column":90},"action":"insert","lines":["口"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":89},"end":{"row":15,"column":90},"action":"remove","lines":["口"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":89},"end":{"row":15,"column":91},"action":"insert","lines":["ip"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":91},"end":{"row":15,"column":92},"action":"insert","lines":["和"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":92},"end":{"row":15,"column":94},"action":"insert","lines":["端口"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":13},"end":{"row":16,"column":19},"action":"remove","lines":["server"]},{"start":{"row":16,"column":13},"end":{"row":16,"column":14},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":["p"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":58},"end":{"row":10,"column":58},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425018990672,"hash":"ccf50f776df34112dc1b6b9bbc0ffd20cbcc0f0e"}