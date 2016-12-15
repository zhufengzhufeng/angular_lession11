var obj  = {
    b:()=>{
        //箭头函数中没有this指向，从而解决了this的问题，他的this就是上一级的this
        setTimeout(()=>{
            console.log(this);
        },1000);
    }
};
obj.b();

function a(a,b) {
    return a+b;
}
let a =(a,b)=>a+b;