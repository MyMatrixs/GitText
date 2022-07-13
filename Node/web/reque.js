var thhp = require("http");
var url = require("url");

var server =  thhp.createServer(function(require,response){
    response.writeHead(200,{
        "Content":'text/html'
    });
    var urlstr = require.url;
    response.write('<head><meta charset="utf-8"></head>');
    response.end("ure"+urlstr);
})
server.listen(8887);
console.log("服务来了！");