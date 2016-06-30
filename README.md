# react-webpack-mud
use react make page,webpack to Consolidation and compression

此案例 利用 react写前端页面<br/>
webpack去整合 压缩 <br/>

#查看案例：<br/>
进入相应目录（react_harry）<br/>
1、npm install   //下载依赖<br/>
2、webpack-dev-server  //启动服务<br/>
3、打开 浏览器  默认服务是 http://localhost:8080/harry-1.html  （也可以自行设置）<br/>

#主要文件（webpack.config.js）<br/>
里面有webpack的各种组合用法<br/>
其中包括<br/>
1、css、js、jsx、jquery、jason、babel、图片、html  的解析loader<br/>
2、提取公共地方的webpack插件<br/>
3、压缩插件<br/>
4、如何直接引入压缩文件（解决react及react-dom压缩报错问题  直接引入已经压缩的文件）<br/>
