/*
* push pop shift unshift splice slice concat reverse sort indexOf lastIndexof forEach map join
* */
// 操作数据
//1.增  push
var arr = [{name:1},{name:2},{name:3}];
/*arr.push({name:2});
console.log(arr);*/
//2.删 [{name:1},{name:2},{name:3},{name:2}] filter (*返回一个新的数组)
var index = 2;
/*arr = arr.filter(function (item,index) { //如果返回true的则留下，返回false则删除掉
    return item.name != index;
});
console.log(arr);*/
//查 find 找到后返回true即可
var obj =  arr.find(function (item) {
    return item.name == index;
});
console.log(obj);
//改 map
var index = 1;
var obj = {name:100};
var arr = [{name:1},{name:2},{name:3}];
arr = arr.map(function (item) {
    if(item.name == index){
        return obj;
    }
    return item;
});
console.log(arr);
//filter 返回true 留下 false 是删除 返回新数组
//find 返回true 找到了那一项，返回那一项
//map  可以把某一项进行替换。