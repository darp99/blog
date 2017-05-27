## 阿里云添加ppa源403错误解决方式

我在阿里云 Ubuntu16.04 添加 ppa:certbot/certbot的ppa源的发现在`sudo apt update`时，所有的 PPA 源使用都会出现类似

```
Err:4 http://ppa.launchpad.net/ondrej/php/ubuntu xenial Release
403 Forbidden [IP: 112.124.140.210 80]
```

这样的 403 错误提示，而且 IP 是阿里云的 IP。

经过排查以后发现原来是阿里云在安装的时候默认使用了 apt 代理导致被 PPA 源 403。

解决方案：

```
sudo vim /etc/apt/apt.conf
```

删除其中的

```
Acquire::http::Proxy "http://mirrors.aliyun.com/";
```

一行即可。