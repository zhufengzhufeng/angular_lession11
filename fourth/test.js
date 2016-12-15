var str = 'welcome     to beijing';
var reg = /^[a-z]|\s([a-z])/g;
str = str.replace(reg,function (item) {
   return item.toUpperCase();
});
console.log(str);

//字符串具有不变性
var a = 'abcd';
a[0] = 100;
console.log(a);


