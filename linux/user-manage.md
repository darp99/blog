## 组操作  

0、查看所有组： /etc/group

1、添加用户组：groupadd [-g gid] gname

2、重命名组：groupmod -n new_name old_name

3、编辑组编号 : groupmod -g gid gname

4、删除组： groupdel gname #at first you must del the groups' users

## 用户操作

0、查看所有用户：cat /etc/passwd

1、添加用户： useradd -g gname -d /home/udir -c comment uname

2、重命名用户：usermod -l new_name old_name

3、更改用户所在组：usermod -g new_group uname

4、删除用户： userdel -r uname ( -r删除用户的文件数据)

5、禁止非root用户登录touch /etc/nologin

6、锁定用户： passwd -l uname

7、解锁用户： passwd -u uname

8、登录不需要密码：passwd -d uname

9、添加用户到其它组： gpasswd -a uname gname

10、登录到其它组： newgrp gname

11、从组中删除：gpasswd -d uname group

12、给组设置密码：gpasswd gname

13、使用其他用户登录：su uname

14、查看用户信息：id uname

15、查看用户所在组：groups uname

16、编辑用户资料：chfn uname

17、显示用户资料：finger uname


