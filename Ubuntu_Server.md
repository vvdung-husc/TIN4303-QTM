
# Ubuntu Server
[ Ubuntu Server 24.04](https://ubuntu.com/download/server)

# Yêu cầu 2 NIC

 - 1 NIC kiểu NAT
 - 1 NIC kiểu Host-only (192.168.56.254/24)

## Cấu hình địa chỉ IP tĩnh
[Tham khảo - Cấu hình IP tĩnh](https://quantrimang.com/cong-nghe/cau-hinh-dia-chi-ip-tinh-tren-ubuntu-22-04-lts-va-22-10-195569)
> Kiểm tra IP có hoạt động bằng cách ping với máy host và từ host vào Linux

## Cài đặt OpenSSH để điều khiển từ xa

>sudo apt install openssh-server

[Tham khảo](https://dotrungquan.info/huong-dan-cai-dat-ubuntu-server-24-04-lts/)

Hiển thị trạng thái mạng
>netstat -plnt 


## Chia sẽ internet từ Ubuntu. IPTABLES, NAT - Network Address Translation

>sudo sysctl -w net.ipv4.ip_forward=1

>sudo iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE
