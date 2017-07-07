# 使用公私钥登录远程服务器

## 本机生成公私钥
```shell
ssh-keygen -t rsa 
# 一直回车默认即可
Generating public/private rsa key pair.
# Key存放路径
Enter file in which to save the key (/lishude/.ssh/id_rsa): 
# 输入密码短语（留空则直接回车）
Enter passphrase (empty for no passphrase): 
# 重复密码短语
Enter same passphrase again: 
Your identification has been saved in /lishude/.ssh/id_rsa.
Your public key has been saved in /lishude/.ssh/id_rsa.pub.
The key fingerprint is:
blah...
```
## 拷贝公钥到远程服务器

```shell
#复制公钥到无密码登录的服务器上,22端口改变可以使用下面的命令
ssh-copy-id -i ~/.ssh/id_rsa.pub username@remote_server
```

## 修改远程服务器SSH配置文件
```shell
vim /etc/ssh/sshd_config
#禁用密码验证
PasswordAuthentication no
#启用密钥验证
RSAAuthentication yes
PubkeyAuthentication yes
#指定公钥数据库文件
AuthorsizedKeysFile ~/.ssh/authorized_keys
#重启SSH服务
service ssh restart
```