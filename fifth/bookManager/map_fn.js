var arr = [
    {name:'iphone',price:20,id:1,count:1},
    {name:'iphone',price:20,id:2,count:2},
];
var id = 2;
var content = {name:'apple',price:10};

arr = arr.map(function (item) { //找到想要改的改掉返回即可
    if(item.id == id){
        item.name = content.name;
        item.price = content.price;
    }
    return item ;
});
console.log(arr);