# laravel+LNMP配置最佳实践
## 更新软件源  
`sudo apt-get update`

## 解决语言问题冲突  
```shell
sudo apt-get install -y language-pack-en-base
locale-gen en_US.UTF-8  
export LANG=en_US.UTF-8 
export LC_ALL=en_US.UTF-8 
```
## 安装所有依赖
`sudo apt install git vim php7.0-mysql php7.0-fpm php7.0-curl php7.0-xml php7.0-mcrypt php7.0-json php7.0-gd php7.0-mbstring php7.0-curl php7.0-zip php mysql-server nginx -y`

## 安装Git和Vim  
`sudo apt-get install git vim -y`

## 安装 php7  
`sudo apt-get install php -y`  

**查看php版本：**`php -v`

## 安装 php7-lib  
`sudo apt-get install php7.0-mysql php7.0-fpm php7.0-curl php7.0-xml php7.0-mcrypt php7.0-json php7.0-gd php7.0-mbstring php7.0-curl php7.0-zip -y`

**注意：** php-zip 包，composer特别需要！

## 安装 mysql  
`sudo apt-get install mysql-server -y`  
**查看mysql版本：**`mysql --verison`

## 新建数据库  
`create database dbname default charset utf8mb4 collate utf8mb4_unicode_ci`

## 更新数据库
```shell
sudo mysql_upgrade -u root -p
service mysql restart
```

## 安装 Nginx  
`sudo apt-get install nginx -y  `  
**查看nginx版本：**`nginx -v`

## 配置 PHP  
**php-fpm配置**  
`sudo vim /etc/php/7.0/fpm/pool.d/www.conf  `  
`listen = /var/run/php/php7.0-fpm.sock`

**URL安全配置**  
`sudo vim /etc/php/7.0/fpm/php.ini`   
`/cgi.fix_pathinfo = 0`  

## 配置 Nginx
`sudo vim /etc/nginx/sites-available/default`  
```
server {
        listen 80 default_server;
        listen [::]:80 default_server ipv6only=on;

        root YOUR-PROJECT-DIR/public;
        index index.html index.php index.htm;

        server_name YOUR DOMAIN OR IP;

        location / {
                try_files $uri $uri/ /index.php?$query_string;
       }

       location ~ \.php$ {
                try_files $uri /index.php =404;
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
                fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
       }
}
``` 

## 配置gzip  
`sudo vim /etc/nginx/nginx.conf`   

```
gzip on;
gzip_disable "msie6";
gzip_vary on;
gzip_proxied any;
gzip_comp_level 5;
gzip_min_length 256;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_types text/plain text/css application/json application/x-javascript
text/xml application/xml application/xml+rss text/javascript;
```

## 重启服务
`sudo service nginx restart`  
`sudo service php7.0-fpm restart`  

## Composer

### 安装

```shell
sudo wget https://dl.laravel-china.org/composer.phar -O /usr/local/bin/composer
sudo chmod a+x /usr/local/bin/composer
```

### 国内Composer镜像
```shell
composer config -g repo.packagist composer https://packagist.laravel-china.org
```
## 为文件目录赋权
1. 为访问网站用户赋权  `sudo chown -R :www-data YOUR-PROJECT-DIR `
2. 为storage赋予写权限  `sudo chmod -R 775 YOUR-PROJECT/storage ` 

**注意：**因为Composer不推荐使用root用户进行安装依赖（安全问题），所以最好把网站目录放在当前用户目录之下。