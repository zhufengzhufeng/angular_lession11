//node给我们提供的解析表单数据的一个模块
var querystring = require('querystring');
var str = 'username!=123&&password!=456';
//JSON.parse转对象  JSON.stringify转字符串
var obj = querystring.parse(str,'&&','!=');
//默认通过& = 进行解析
//console.log(obj);
console.log(querystring.stringify(obj,'**','||'));
//第二个参数是字段分隔符 第三个参数是key value分隔符