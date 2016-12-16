var obj = {
    $timeout:function (cb) {
        console.log('$timeout');cb()
    },
    $interval:function (cb) {
        console.log('interval');cb()
    }
};
//将函数转换成字符串进行参数匹配
function cc(  $timeout   ,  $interval  ) {}
//第一步先取出（）中的内容，替换掉空格，以逗号分割
cc.toString().match(/\((.*)\)/)[1].replace(/\s+/g,'').split(',');
console.log(cc.toString().match(/\((.*)\)/)[1].replace(/\s+/g,'').split(','));





