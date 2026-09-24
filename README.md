# TIN4303 - Quản trị mạng

---
## WiFi Lab: CNTT-MMT/13572468


### Dịch vụ DNS

Tên miền quản lý: **tink48.vn**

## Phần mềm:
___1. Máy ảo___
 - VMWare https://www.vmware.com/

    \+ Disable DHCP VMNet1 (Host-only)

    \+ Win2019 administrator/Abc@123

 - VirtualBox https://www.virtualbox.org/
 - Hyper-V https://kb.pavietnam.vn/hyper-v-la-gi.html

___2. Hệ điều hành___
 - Windows Server 2022 (Standard - GUI)
 - Windows 10 Pro (7,11)
 - Ubuntu 26.04 Server LTS https://ubuntu.com/download/server

Link tải VMWare Workstation 26H1 https://it.iothings.vn/downloads/

-------------------------

## 1. Chuẩn bị Networking cho VMWare và Windows Host
<details> <summary><b><i>Cấu hình Network cho VMWare và Windows Host</i></b></summary> 

![](https://raw.githubusercontent.com/vvdung-husc/TIN4303-QTM/refs/heads/main/Documents/VMWare_Network_Config.png)

</details>

<details> <summary><b><i>Xác định NIC kiểu NAT trong Windows Server</i></b></summary> 

![](https://github.com/vvdung/storage/blob/main/TIN4303/WAN_MAC_Address.png?raw=true)
</details>

-------------------------

## 2. Chuẩn bị máy ảo để cài đặt Windows Server 2019 Standard (Desktop Experience)
<details> <summary><b><i>Máy ảo với các thông tin</i></b></summary> 

![](https://raw.githubusercontent.com/vvdung-husc/TIN4303-QTM/refs/heads/main/Documents/Win2019_Config.png)
</details>

[**- Cài đặt Windows Server 2019**](https://suncloud.vn/cai-windows-server-2019)

[**- Cấu hình tường lửa - Firewall**](https://quantrimang.com/cong-nghe/tim-hieu-ve-tuong-lua-windows-firewall-tren-windows-server-2012-145537)

[**- Thiết lập Remote Desktop**](https://quantrimang.com/cong-nghe/thiet-lap-remote-desktop-tren-windows-server-2019-180023)

-------------------------

## 3. Chia sẻ Internet từ Windows Server cho Windows Client

<details> <summary><b><i>Server - Thực hiện chia sẻ Internet</i></b></summary> 

![ICS - Windows Server](https://github.com/vvdung/storage/blob/main/TIN4303/ICS_Win2022.png?raw=true) 
</details>

<details> <summary><b><i>Server - Địa chỉ LAN trước và sau khi chia sẻ Internet</i></b></summary>

![ICS - Windows Server - LAN](https://github.com/vvdung/storage/blob/main/TIN4303/ICS_LAN_Before_After.png?raw=true) 
</details>

<details> <summary><b><i>Client - Địa chỉ LAN trước và sau khi cấu hình để truy xuất Internet</i></b></summary>

![ICS - Windows Client - LAN](https://github.com/vvdung/storage/blob/main/TIN4303/LAN_WIN10_Before_After.png?raw=true) 

</details>

-------------------------
