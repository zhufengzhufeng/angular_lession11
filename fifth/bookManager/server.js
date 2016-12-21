var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
var books = [{name:'angularjs权威指南',price:50,count:1,id:1},{name:'angularjs权威指南',price:150,count:2,id:2},{name:'angularjs权威指南',price:250,count:3,id:3}];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/books(\/\d+)?$/.test(pathname)){ //  /books/1  /books
        //根据是否传递参数和请求的方法来进行判断
        var id = /^\/books(\/(\d+))?$/.exec(pathname)[2];
        //获取请求方法
        switch (req.method){
            case 'GET':
                if(id){

                }else{ //查询所有
                    res.end(JSON.stringify(books));
                }
                break;
            case 'DELETE':
                if(id){ //删除某个
                    books = books.filter(function(item){
                        return item.id!=id;//返回false删除当前项
                    });
                    res.end(JSON.stringify({}));//删除返回 {}
                }
                break;
            case 'POST':
                break;
            case 'PUT':
                //能接收到id
                if(id){//要修改的id
                    var str = ''; //接受到的请求体
                    req.on('data',function (data) {
                        str+=data;
                    });
                    req.on('end',function () {
                        var content = JSON.parse(str);//{name:1,price:2}
                        var target = '';
                        books = books.map(function (item,index) {
                            if(item.id == id){
                                item.price = content.price;
                                item.name = content.name;
                                target = item;
                            }
                            return item;
                        });
                        res.end(JSON.stringify(target));//返回修改的那一项
                    });
                }
                break;
        }
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('Not Found');
            }
        });
    }
}).listen(8080);
