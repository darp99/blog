在[这里](https://about.gitlab.com/downloads/)选择你的系统，按照提示安装。  

下面以Ubuntu 16.04 LTS版本为例，以后会补充使用docker来管理 gitlab。

## 安装依赖包
`sudo apt-get install curl openssh-server ca-certificates postfix`

## 添加gitlab源
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash

**网络不好的选项**  

在 [这里](https://packages.gitlab.com/gitlab/gitlab-ce) 找到你的版本号并替换下面 url  
`sudo curl -LJO <url>`  
`sudo dpkg -i gitlab-ce-XXX.deb`

## 更新源以及安装
`sudo apt-get update && sudo apt-get install gitlab-ce -y`

## 配置 /etc/gitlab/gitlab.rb
`sudo vim /etc/gitlab/gitlab.rb`

## 配置访问接口
external_url = 'http://git.example.com'

## 配置邮件服务

```
gitlab_rails['smtp_enable'] = true  
gitlab_rails['smtp_address'] = ""   
gitlab_rails['smtp_port'] = 25  
gitlab_rails['smtp_user_name'] = ""  
gitlab_rails['smtp_password'] = ""  
gitlab_rails['smtp_domain'] = ""  
gitlab_rails['smtp_authentication'] = "login"  
gitlab_rails['smtp_enable_starttls_auto'] = false  
gitlab_rails['smtp_tls'] = false  
```

**注意：**  

```
smtp_address和smtp_domain的设置，以阿里云企业邮箱为例  
gitlab_rails['smtp_address'] = "smtp.mxhichina.com"   
gitlab_rails['smtp_domain'] = "mxhichina.com"  
```

## 关闭 prometheus
个人经验：如果不关闭的话，会一直报错。
prometheus_monitoring['enable'] = false

## 重启GitLab
`sudo gitlab-ctl reconfigure && sudo gitlab-ctl restart `

## 一些推荐设置  
首次进入设置管理员密码，设置 `your-domain/admin/application_settings`

1. 建议关闭 Gravatar 头像功能  
在 Account and Limit Settings 关闭 Gravatar enabled，国内访问不友好。

2. 关闭注册功能  
在 Sign-in Restrictions 关闭 Sign-in enabled，如果是内部使用建议关闭，然后管理员工分配注册。

## 升级Gitlab
在管理后台位置 overview 界面如果红色提示需要升级，那么尽快升级到最新版本。
1. 关闭 gitlab  
`sudo gitlab-ctl stop`
2. 升级 gitlab  
`sudo apt-get install gitlab -y`