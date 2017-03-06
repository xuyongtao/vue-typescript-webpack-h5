# h5

## 概述

技术栈：```webpack + vue + typescript``` 

运行环境：node（v6.2.0）

## 线下前端人员运行

```bash
$ cd 项目根目录（如：cd ~/workplace/91/h5
$ npm install
$ ./debug
```

打开浏览器访问 [http://127.0.0.1:8080/]

## 线下后端人员运行

```bash
$ cd 项目根目录（如：cd ~/workplace/91/h5
$ npm install
$ ./release -d ./a/b -p http://m.qmjy.dev/
```

打开浏览器访问 [http://m.qmjy.dev/]
-d 该参数指定前端项目发布到的本地地址，需为相对路径
-p 该参数指定后端跑该项目的服务器地址（如：http://m.qmjy.dev/）

## 线上管理人员运行

```bash
$ cd 项目根目录（如：cd ~/qmjy-h5）
$ npm install
$ ./release -d ./h5.qmin91.com
```

-d 该参数指定前端项目发布到的本地地址，需为相对路径