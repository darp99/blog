# install on Ubuntu

## download the source code from nodejs
[choose the newest Node](https://nodejs.org/en/download/current/),copy the url,and run like this: `wget https://nodejs.org/dist/v7.8.0/node-v7.8.0.tar.gz'.  

## install dependencies
1. sudo apt-get install python2.7 #install python2
2. sudo ln -s /usr/bin/python2.7 /usr/bin/python #create soft link
3. cd /home/user/
4. tar -zxf nodejs.tar.gz
5. cd nodejs
6. sudo apt-get install build-essntial #install gcc compile
7. ./configure
8. make
9. sudo make install  

## test
1. node -v
2. npm -v  

## change to taobao npm mirroring
1. npm install -g cnpm --registry=https://registry.npm.taobao.org
2. cnpm -v


