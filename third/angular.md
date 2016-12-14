## 控制器
- $scope
## 指令
定义指令
```
app.directive("指令的名字"，function(){
    
});
```


## bower同npm
- bower主要用来管理前端代码
- 安装bower
```
npm install bower -g
```
- 初始化bower配置文件。记录依赖
```
bower init 
```
- 安装angular
```
bower install angular --save
```

> 安装好后默认安装到bower_components下

## 指定安装目录
建立文件.bowerrc在里面指定目录