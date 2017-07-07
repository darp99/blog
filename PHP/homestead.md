# 安装Honestead
>Laravel 致力于让 PHP 的开发过程更加轻松愉快，这其中也包括你的本地开发环境。 Vagrant 提供了一种简单，优雅的方式来管理和调配虚拟机。Laravel Homestead 是一个官方预封装的 Vagrant box，它为你提供了一个完美的开发环境，你无需在本地安装 PHP ，web 服务器，或其他服务软件。并且不用担心系统被搞乱！ Vagrant box 是完全一次性的。如果有什么地方出错了，你也可以在几分钟内销毁并重建 box ！Homestead 可以运行在 Windows 、 Mac 或 Linux 系统上，并且里面包含了 Nginx Web 服务器、 PHP 7.1 、 MySQL 、 Postgres 、 Redis 、 Memcached 、 Node 、 以及所有利于你开发 laravel 应用的其他程序。

## 安装Vagrant
百度搜索vmware或者vmbox下载安装，然后[下载Vagrant：](https://www.vagrantup.com/downloads.html)

## 安装Homestead
```shell
cd ~
git clone git clone https://github.com/laravel/homestead.git Homestead
cd ~/Homestead
# 在 Homestead Git 目录运行即可
vagrant up
```

等待安装即可。。

默认使用的虚拟机软件是 vmbox ，可以修改 Homestead.yaml 的 provider 字段使用其它虚拟机。

## 网络不好的选项

vagrant 下载 box 由于众所周知的原因会失败，我们在直接运行`vagrant box add laravel/homestead`的时候会提示下载地址，复制下来使用迅雷（会员）把 box 先下载下来，重命名为`homestead.box`。然后使用`vagrant box add laravle/homestead ./homestead.box`进行安装。这里同时要注意下载地址的数字版本号！

我们安装成功之后要对box目录进行修改版本号，不然不能运行`vagrant up`

```shell
cd ~/.vagrant.d/boxes/laravel-VAGRANTSLASH-homestead
# 默认文件夹名是0，只要修改为我们下载地址中的版本号即可
mv 0 2.1.0
```

然后我们切换到Homestead Git目录运行`vagrant up`即可。

## Homestead配置
### 配置你的提供者

`Homestead.yaml` 中的 `provider` 参数设置取决于你用的是哪一个 `Vagrant` 提供者 `virtualbox` 、 `vmware_fusion` 、 `vmware_workstation` ，或者 `parallels` 。你可以根据自己的喜好来设置提供者：

```
provider: virtualbox
```

### 配置共享文件夹

你可以在 Homestead.yaml 文件的 folders 属性里列出所有想与 Homestead 环境共享的文件夹。这些文件夹中的文件若有变更，它们将会在你的本机电脑与 Homestead 环境自动更新同步。你可以在这里设置多个共享文件夹：

```
folders:
    - map: ~/Code
      to: /home/vagrant/Code
```

若要启动 NFS ,只需要在共享文件夹的设置值中加入一个简单的参数：

```
folders:
        - map: ~/Code
          to: /home/vagrant/Code
          type: "nfs"
```    

你也可以在配置中传递任何 `Vagrant` 中的 共享文件夹 支持的参数，在 `options` 参数下列出它们：
```
folders:
    - map: ~/Code
      to: /home/vagrant/Code
      type: "rsync"
      options:
          rsync__args: ["--verbose", "--archive", "--delete", "-zz"]
          rsync__exclude: ["node_modules"]
```
### 配置 Nginx 站点

对 Nginx 不熟悉吗？没关系。sites 属性可以帮助你可以轻易指定一个 域名 来对应到 homestead 环境中的一个目录上。在 Homestead.yaml 文件中已包含了一个网站设置范本。同样的，你也可以增加多个网站到你的 `Homestead` 环境中。 `Homestead` 可以同时为多个 `Laravel` 应用提供虚拟化环境：
```
sites:
    - map: homestead.app
      to: /home/vagrant/Code/Laravel/public
```

如果你在 `Homestead box` 配置之后更改了 `sites` 属性，那么应该重新运行 `vagrant reload --provision` 来更新 `Nginx` 配置到虚拟机上。

### 关于 Hosts 文件

你必须将在 Nginx sites 中所添加的「域名」也添加到你本机电脑的 hosts 上。 hosts 文件会将请求重定向至 Homestead 环境中设置的本地域名。在 Mac 或 Linux 上，该文件通常会存放在 /etc/hosts 。在 Windows 上，则存放于 C:\Windows\System32\drivers\etc\hosts 。设置内容如下所示：

```
192.168.10.10  homestead.app
```

务必确认 IP 地址与 Homestead.yaml 文件中设置的相同。将域名设置在 hosts 文件之后，你就可以通过网页浏览器访问你的网站。
```
http://homestead.app
```
参考：[laravel/docs/homestead](http://d.laravel-china.org/docs/5.4/homestead)

## Vagrant常用命令
启动： vagrant up
停止： vagrant halt
ssh： vagrant ssh
