//操作json
var fs = require('fs');
//1.获取 (柯里化)
/*fs.readFile('./book.json','utf8',function (err,data) {
    if(err) console.log(err);
    console.log(JSON.parse(data));
});*/
//2.增加
var newBook = {
    "bookName": "angular权威指南",
    "bookPrice": 70,
    "bookCover": "http://img4.imgtn.bdimg.com/it/u=3121219979,3595959843&fm=21&gp=0.jpg",
    "id": 3
};
//先获取 在写入
//1. 只要读取就要写一个路径 2.不指定utf8  3.不处理错误 4，json.parse
function getBooks(fn) {
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err){
            fn([])
        }else{
            fn(JSON.parse(data));
        }
    });
}
getBooks(function (data) {
    data.push(newBook);//加入内容
    fs.writeFile('./book.json',JSON.stringify(data),function () {
        console.log('成功');
    })
});
//3.修改


//4.删除