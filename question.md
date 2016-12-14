## angular怎么用
- 处理数据，前后端分离框架（MVVM）,双向数据绑定,扩展标签的功能,模块化,单页开发。
## ng-app(html)
- 启动angular程序，指定模块来启动，定义模块。调用run方法,产生$rootScope
## ng-model
- 只能放置变量，不能放运算
- 用于表单元素
- 如果作用域上没有，则声明
- 如果有取值放到输入框中
- 如果使用user.name 则会创建一个对象，将name变成一个变量存入进来
## ng-bind
- 和{{}}相同，ngbind不会闪烁
- 不能用于表单元素
- 可以使用!/?:
- 原有的内容会被ng-bind绑定的值替换掉
## ng-cloak
用途: 防止闪烁

- 先声明一个css,找到所有带有ng-cloak让其隐藏
- 增加到需要防止闪烁的元素身上
- 加载后移出掉ng-cloak属性
## ng-controller
用途:调度数据的，买一送一送作用域

- 不能操作dom，dom在link函数操作
- 管辖范围,和dom平齐
- 可以将带有ng-controller的标签嵌套，子继承父 父继承不了子
- 不能复用
- 调用ng-controller后可以执行控制器

## ng-repeat
用途:循环遍历

- 要循环谁就写在谁的身上
- 遍历数组 ng中增加的属性$index $odd $even $first $last $middle (根据索引来遍历)
- 通过(key,value)可以获得索引，默认写一个变量则是value
- 对象同数组

## ng-repeat 为什么 track by $index
- 如果value重复，不能通过相同的value去遍历，通过唯一项来进行遍历。只要是数组就加track by $index

## ng-click
- angular的事件 ng-click="a()"

## ng-show/ng-hide
用途：控制元素的显示隐藏

- 通过css样式进行隐藏，内部命令依然执行

> 频繁切换采用ng-show/ng-hide

## ng-if
用途：控制元素的显示隐藏

- 通过删除dom达到隐藏效果，如果为false内部指令不再执行
- 会产生一个作用域，保留删掉的内容

> 一般和ng-repeat连用，如果数据不存在就移出掉dom

## ng-disabled 
用途:ng-disabled="true" 进入禁用状态

## ng-readonly
用途:ng-readonly="true" 进入仅读状态

## 指令（内置，自定义）
- 自定义：组件式和装饰型
    - 组件式:Element,看有没有template
    - 装饰型:Attribute,一般没有模板 link函数
```
return {
    restrict:'EA', 限制使用范围
    template/templateUrl, 模板
    transclude:true,
    scope:true/{@=&}/不写
    replace：true 替换
    link:function(scope,element,attrs){}
}
```


## link,transclude

## @ = & scope:true scope:{}

## 作用域的产生
产生作用域的方式
- ng-controller
- ng-app
- ng-transclude
- scope:true scope:{}
- ng-if
- ng-repeat ng-repeat="a in arr"


## git add有什么作用 什么时候执行
添加到暂存区，在提交到历史区之前

## git log
搜索
```
--author/--grep
```
## git上传静态页面
- 先写好内容
- 创建分支gh-pages
```
git checkout -b gh-pages
```
- 连接远程仓库
```
git remote add 别名 地址
```
- 推送
```
git push 别名 gh-pages
```

## git diff
- 工作区和暂存区
```
git diff
```
- 工作区和历史区
```
git diff 分支名
```
- 暂存区和历史区
```
git diff --cached
```