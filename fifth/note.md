## 安装http-server
- 安装
```
npm install http-server -g
```
- 启动
在需要的文件夹下，启动项目
```
http-server
```


## 增 删 改 查 /user method get post delete put
- /adduser
- /deleteUser
- /deleteOne?a=1
- /updateUser
- /get
- /getOne?a=1

## 增加用户 (restful风格)  
通过http的四个动词和参数 获取对应的资源
- /user post 后台需要返回增加的那一项
删除
- /user delete 后台返回一个{}
- /user/1 delete 后台返回一个{}
修改
- /user put 后台返回的修改的那一项
查询
- /user get 返回一个数组
- /user/1 get 返回一个对象

## 需要一个模块进行交互angular-resource


## ionic+ cordova + angularjs
- 安装ionic和cordova
```
npm install ionic cordova -g
```
- 自动生成angular项目
```
ionic start 项目名
```

## android和ios打包
- ios打包只能在mac本上 ipa
- android apk

> 打包android 需要安装java android sdk