let req = require("http")

let server = req.createServer(function(require,response){
    response.writeHead(200,{
        "Content-Type": "text/html;"
    });
    response.write('<head><meta charset="utf-8"></head>')
    response.end("你好 nodejs")
})
server.listen(8888);
//提示信息
console.log("服务启动了！");