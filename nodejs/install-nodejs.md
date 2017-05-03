# 编译安装nodejs最新版本
## 从 nodejs 官网下载最新源代码
[choose the newest Node](https://nodejs.org/en/download/current/),copy the url,and run like this: `wget https://nodejs.org/dist/v7.8.0/node-v7.8.0.tar.gz`.  

## 安装依赖以及编译
1. sudo apt-get install python2.7 #install python2
2. sudo ln -s /usr/bin/python2.7 /usr/bin/python #create soft link
3. cd /home/user/
4. tar -zxf nodejs.tar.gz
5. cd nodejs
6. sudo apt-get install build-essntial #install gcc compile
7. ./configure
8. make
9. sudo make install 

**编译安装较慢，建议使用下面的方式**  

# 使用 node 管理工具安装
1. sudo apt install nodejs-legacy //ubuntu 仓库默认安装的是低版本的的 nodejs
2. sudo apt install npm //安装npm也是低版本的
3. sudo npm install -g n
4. sudo n latest  //更多文档查看<https://github.com/tj/n>
5. npm config set registry https://registry.npm.taobao.org //永久设置npm registry为淘宝镜像
6. npm config get registry //测试 npm 镜像
7. npm install npm@latest //升级npm到最新版本

# 国内npm镜像设置
1. 临时使用：`npm --registry https://registry.npm.taobao.org install PACKAGE-NAME`
2. 永久设置：`npm config set registry https://registry.npm.taobao.org`
3. cnpm包：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
