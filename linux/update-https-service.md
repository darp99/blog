# 使用lets encrypt免费升级到https 
环境为 Ubuntu Server 16.04 和 Nginx，具体可参考[官网](https://certbot.eff.org/)

## 安装依赖
1. sudo apt-get update 
2. sudo apt-get install python2.7 git -y

## 下载certbot
1. git clone https://github.com/certbot/certbot.git
2. cd certbot

## 不重启获取证书
`./certbot-auto certonly --webroot -w /var/www/your-project-dir -d your-domain.com -d another-domain.com`  

## 配置nginx
```
server{
      listen 80;
      # 如果访问http自动跳转到https
      return 302 https://your-domain.com/
}
server {
       listen 443;
       # 需要多个域名配置的话下面只需要保留一个
       listen [::]:443 ssl ipv6only=on;
       # server name
       server_name your-project-name.com;

       root your-project-dir;
       index index.html index.htm index.php;

       ssl on;
       # 注意下面的地址要正确
       ssl_certificate /etc/letsencrypt/live/your-domain/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/your-domain/privkey.pem;

       ssl_session_timeout 5m;

       ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
       ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";
       ssl_prefer_server_ciphers on;
        }
}
```
## 重启 nginx 服务   
`sudo service nginx restart`

## 到期自动更新  
`certbot renew --dry-run`
