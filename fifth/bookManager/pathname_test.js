var str1 = '/books/1';
var str2 = '/books';
var str3 = '/books/1/2';
var str4 = '/a/books/1';
//如果传递 获取1，返回的匹配结果都true
console.log(/^\/books(\/\d+)?$/.test(str3));
console.log(/^\/books(\/(\d+))?$/.exec(str2)[2]);