var name = '珠峰培训';
var age = 8;
console.log(name+'今年'+age+'岁了');
console.log(`${name}今年${age}岁了`);
var str = '<ul>';
str+='<li>'+name+'</li>';
str+='<li>'+age+'</li>';
str+='</ul>';
console.log(str);
var obj = {name:1};
var str = `<ul>
    <li>'${name}'</li>
    <li>${obj.name}</li>
</ul>`;
console.log(str);
