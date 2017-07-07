# 安装php7.1
有Ubuntu官方仓库PHP还停留在7.0时代，而PHP官方已经推荐使用PHP7.1，所以为了保证安全和减少Bug，推荐大家使用[PHP7.1](https://launchpad.net/~ondrej/+archive/ubuntu/php)。

```shell
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
```
# 重要说明
如果已经安装了PHP7.0以及Lib，可以使用 `apt install -y php7.1-*`，这里的 `*` 代表已经安装的PHP库，你可以在安装前使用 `dpkg -l | grep php` 查看安装了哪些 php lib。安装完成之后需要对 php.ini 以及 www.conf 、 nginx.conf 进行修改，然后重启 nginx 以及 php 服务。

# 可能需要
- [Ubuntu中怎样添加或删除一个PPA源](https://github.com/isLishude/blog/issues/48)
- [阿里云PPA源403报错的解决方式](https://github.com/isLishude/blog/issues/36)