# TIN4303 - Quản trị mạng

---
## WiFi Lab: CNTT-MMT/13572468


### Dịch vụ DNS

Tên miền quản lý: **tink47.vn**

## Phần mềm:
___1. Máy ảo___
 - VMWare https://www.vmware.com/

    \+ Disable DHCP VMNet1 (Host-only)

    \+ Win2019 administrator/Abc@123

 - VirtualBox https://www.virtualbox.org/
 - Hyper-V https://kb.pavietnam.vn/hyper-v-la-gi.html

___2. Hệ điều hành___
 - Windows Server 2019 (Standard - GUI)
 - Windows 10 Pro (7,11)
 - Ubuntu 24.04 Server LTS https://ubuntu.com/download/server

Link tải VMWare Workstation 25H2 https://it.iothings.vn/downloads/

-------------------------
## Tham khảo cài đặt dịch vụ DHCP và DNS
[**- Cài đặt và cấu hình DHCP Server**](https://bkhost.vn/blog/cai-dat-va-cau-hinh-dhcp-server-tren-windows-server/)

>  [***Dịch vụ DHCP***](https://github.com/vvdung-husc/TIN4303-QTM/blob/main/DHCP.md)

![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DHCP_Server.png)
 
[**- Cài đặt và cấu hình DNS Server**](https://quantrimang.com/cong-nghe/cai-dns-server-tren-windows-server-2019-180046)

>  [***Dịch vụ DNS***](https://github.com/vvdung-husc/TIN4303-QTM/blob/main/DNS.md)

![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DNS_Server.png)


[**Tham khảo - Tạo website từ IIS - www.ssl.com**](https://www.ssl.com/vi/l%C3%A0m-th%E1%BA%BF-n%C3%A0o-%C4%91%E1%BB%83/t%E1%BA%A1o-trang-web-m%E1%BB%9Bi-iis-10/)

[**Tham khảo - Tạo website từ IIS - helpdesk.inet.vn**](https://helpdesk.inet.vn/knowledgebase/huong-dan-tao-website-tren-iis-trong-window-server)

-------------------------

## Cài đặt Domain Controller - Tên miền quản lý TINK46.VN
- Windows 2019
  
  [Tham khảo cài đặt Domain Controller](https://quantrimang.com/cong-nghe/active-directory-tren-windows-server-2019-180096#google_vignette)

  ### Xác thức lại DHCP
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DHCP_Authorize.png)
  ### Xóa và tạo lại tink46.vn trong DNS
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DNS_Domain_Delete.png)
  ### Quản lý Users
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DC_Users.png)
  ### Thêm user mới
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DC_New_User.png)
  ### Chia sẽ Thư mục
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DC_Shared.png)
  ### Thêm quyền cho Thư mục được chia sẽ
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/DC_Shared_2.png)
  
- Windows Client

  [Tham khảo tham gia vào Domain đã có](https://quantrimang.com/cong-nghe/huong-dan-gia-nhap-mien-tren-windows-10-145401)

  ### Tham gia vào Domain Controller đã có
  ![](https://raw.githubusercontent.com/vvdung/storage/refs/heads/main/TIN4303/CLIENT_Join_Domain.png)
-------------------------


## 1. Chuẩn bị Networking cho VMWare

![](https://raw.githubusercontent.com/vvdung-husc/TIN4303-QTM/refs/heads/main/Documents/VMWare_Network_Config.png)

-------------------------
## 2. Windows Server 2019 Standard (Desktop Experience)

![](https://raw.githubusercontent.com/vvdung-husc/TIN4303-QTM/refs/heads/main/Documents/Win2019_Config.png)

[**- Cài đặt Windows Server 2019**](https://suncloud.vn/cai-windows-server-2019)

[**- Cấu hình tường lửa - Firewall**](https://quantrimang.com/cong-nghe/tim-hieu-ve-tuong-lua-windows-firewall-tren-windows-server-2012-145537)

[**- Thiết lập Remote Desktop**](https://quantrimang.com/cong-nghe/thiet-lap-remote-desktop-tren-windows-server-2019-180023)

-------------------------

## Tìm hiểu Sysinternals Suite
[**Sysinternals Suite**](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite)


-------------------------
