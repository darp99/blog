## upgrade ubuntu
当前Ubuntu稳定版本为 16.04 ,官方已经释放出新版本 17.04。  

## step
1. 打开系统设置->软件和更新->更新->选择不支持的更新。
2. 打开命令行，运行`sudo apt update`
3. 继续运行`sudo update-manager -c -d`
4. 按照提示操作即可，中途有几处需要确认。

## ubuntu wiki
To upgrade on a desktop system:
- Open the "Software & Updates" Setting in System Settings.
- Select the 3rd Tab called "Updates".
- Set the "Notify me of a new Ubuntu version" dropdown menu to "For any new version".
- Press Alt+F2 and type in "update-manager" (without the quotes) into the command box.
- Update Manager should open up and tell you: New distribution release '16.10' is available.
  - If not you can also use "/usr/lib/ubuntu-release-upgrader/check-new-release-gtk"
- Click Upgrade and follow the on-screen instructions.

To upgrade on a server system:
- Install the update-manager-core package if it is not already installed.
- Make sure the Prompt line in /etc/update-manager/release-upgrades is set to normal.
- Launch the upgrade tool with the command sudo do-release-upgrade.
- Follow the on-screen instructions.