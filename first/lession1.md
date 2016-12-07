## 框架和(库 vue react)
- 库 提供了很多方法，让我们来调用（主动调用）
- 框架 我们按照他的规范去写，人家调用我们（被动）（强约束）

> 框架的好处，提供完整的解决方案

## MVC MVVM
- model 模型 数据 （从数据库中读取到的内容）
- view  视图 (我们看到的内容)
- controller 控制器 （控制将数据渲染到视图上）

> 当视图内容变化时调用控制器，控制器调用模型，渲染视图

## MVVM
- model 数据
- view 视图
- viewModel 视图模型

> 适合单页（spa框架）面开发

## 下载angular
- 下载nodejs会提供一个叫npm的东西 
- node package manager 
```
npm install angular
```
> 通过npm来下载，别人上传上去的‘包’,默认安装到当前目录的node_modules文件夹中，如果上级目录有node_modules 会安装到上级中