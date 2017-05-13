# laravel+LNMP配置最佳实践
## 更新软件源  
`sudo apt-get update`

## 解决语言问题冲突  
1. `sudo apt-get install -y language-pack-en-base` 
2. `locale-gen en_US.UTF-8  `
3. `export LANG=en_US.UTF-8 ` 
4. `export LC_ALL=en_US.UTF-8  `

## 安装Git和Vim  
`sudo apt-get install git vim -y`

## 安装 php7  
`sudo apt-get install php -y`  

**查看php版本：**`php -v`

## 安装 php7-lib  
`sudo apt-get install php7.0-mysql php7.0-fpm php7.0-curl php7.0-xml php7.0-mcrypt php7.0-json php7.0-gd php7.0-mbstring -y`

## 安装 mysql  
`sudo apt-get install mysql-server -y`  
**查看mysql版本：**`mysql --verison`

## create database  
`create database dbname default charset utf8mb4 collate utf8mb4_unicode_ci`

## upgrade database & reload mysql  
1. `sudo mysql_upgrade -u root -p`
2. `service mysql restart`

## install nginx  
`sudo apt-get install nginx -y  `  
**查看nginx版本：**`nginx -v`

## configure php7  
**php-fpm配置**  
`sudo vim /etc/php/7.0/fpm/pool.d/www.conf  `  
`listen = /var/run/php/php7.0-fpm.sock`

**URL安全配置**  
`sudo vim /etc/php/7.0/fpm/php.ini`   
`/cgi.fix_pathinfo = 0`  

## configure nginx  
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
## 为文件目录赋权
1. 为访问网站用户赋权  `sudo chown -R :www-data YOUR-PROJECT-DIR `
2. 为storage赋予写权限  `sudo chmod -R 775 YOUR-PROJECT/storage ` 

## 重启服务
`sudo service nginx restart`  
`sudo service php7.0-fpm restart`  