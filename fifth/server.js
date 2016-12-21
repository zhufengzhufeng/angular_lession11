var http = require('http');//创建http
var url = require('url');//对路径进行解析
var path = require('path');//处理路径获得/后面的?前面的（路由）
var fs = require('fs');//操作文件的
var mime = require('mime');//处理文件类型的
http.createServer(function (req,res) {//当请求到来时执行此监听函数
    var urlObj = url.parse(req.url,true);//将query转换成对象格式默认是字符串
    var pathname = urlObj.pathname;
    //默认访问网站的路径是/
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }
    //当访问首页时，首页中引入css js会对我们的服务器在次发送请求
    else{
        //如果存在响应页面，不存在404
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('Not Found');//字符串或者buffer
            }
        });
    }

}).listen(8080);
