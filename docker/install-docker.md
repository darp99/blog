>Docker是世界领先的软件容器平台。 开发者可以通过 Docker 解决协作时环境不一致的问题。 运维人员可以使用 Docker 在容器中运行和管理应用程序，以获得更好的计算密度。 企业可以使用 Docker 构建敏捷软件持续交付流程，更快，更安全，更可靠地为 Linux 和 Windows Server 上的应用程序提供新功能。

# 在Ubuntu上安装Docker
建议把Docker安装在linux系统上学习使用，如果使用Windows或者Mac可以使用虚拟机安装Ubuntu进行学习。

# Docker版本说明
Docker在apt源仓库里面注册了很多名称，比如docker.io，比如docker-engine，这些都不是我们需要的旧版本，新版的Docker就只有两个，一个是社区版本的docker-ce，一个是收费的企业版docker-ee。  

不过，目前（2017年4月7日 17:01:37），ubuntu官方源还没有新版的docker，所以我们可以按照[官方的说明](https://store.docker.com/editions/community/docker-ce-server-ubuntu)，一步一步来安装docker。

# 使用国内源安装
不过这太慢了，还有可能失败，因为 Docker 的安装资源文件存放在Amazon S3，会间歇性连接失败。所以安装Docker的时候，会比较慢。 这里我推荐使用daocloude的加速服务，高速安装Docker。

`sudo curl -sSL https://get.daocloud.io/docker | sh`

等待大概两分钟就自动安装好了，然后运行`docker -v`，如果出现docker的版本就代表安装好了。

# 配置国内镜像加速
同样的道理，使用docker官方的镜像下载服务超级慢。也是daocloud.io的加速服务，一行命令行搞定。这个是我的加速服务地址，当然你也可以用，我建议你在[Daocloud](https://www.daocloud.io/mirror)注册一个新账号然后使用你个人的加速地址。

`curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://67daa203.m.daocloud.io`  

成功之后，运行`docker pull ubuntu`可以试一试速度。



