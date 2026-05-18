 ## I. Một số câu hỏi
 
 ### Dịch vụ DHCP
 1. DHCP là gì? Chức năng chính của DHCP?
 2. DHCP hoạt động theo mô hình nào?
 3. Mô tả quá trình DORA trong DHCP
 4. DHCP sử dụng TCP hay UDP, sử dụng cổng nào?
 5. DHCP Lease Time là gì?
 6. DHCP Relay Agent dùng để làm gì?
 7. Điều gì xảy ra nếu DHCP Server bị lỗi?
 8. Sự khác biệt giữa "DHCP Reservation" (Đặt trước) và "Static IP" (IP
    tĩnh) được cấu hình thủ công trên máy trạm là gì?
 9. Khi một Client không thể kết nối tới DHCP server, hệ điều hành Windows tự động cấp cho nó một địa chỉ IP thuộc dải nào? Tính năng này gọi là gì?
 10. Thuộc tính "Scope Options" và "Server Options" trong DHCP khác nhau như thế nào? Cấu hình nào được ưu tiên cao hơn?

 ### Dịch vụ DNS
 1. DNS là gì? Chức năng của DNS Server?
 2. Forward Lookup và Reverse Lookup khác nhau thế nào?
 3. DNS sử dụng TCP hay UDP? Số hiệu cổng sử dụng? 
 4. DNS Forwarder là gì?
 5. Conditional Forwarder được cấu hình khi nào?
 6. Bản ghi A, AAAA dùng để làm gì?
 7. Dynamic DNS (DDNS) là gì?
 8. Câu lệnh gì để xóa bộ nhớ đệm DNS trên Windows Client?
 9. Tại sao DNS lại cần thiết trong mạng Internet?
 10. Có thể thay đổi DNS server đang dùng không? Lợi ích là gì?

 ### Dịch vụ Active Directory & Domain Controller
 1. Active Directory là gì?
 2. Domain Controller là gì trong môi trường Active Directory?
 3. Authentication và Authorization khác nhau thế nào?
 4. Kerberos là gì?
 5. FSMO Roles là gì?
 6. Domain Controller và DNS có mối liên hệ như thế nào?
 7. Phân biệt giữa AD DS và Workgroup.
 8. Active Directory Domain Services (AD DS) và Domain Controller có mối quan hệ như thế nào?
 9. Tại sao cần nhiều Domain Controller trong một domain?
 10. Điểm khác biệt giữa Domain Controller và máy thành viên (member server/workstation) là gì?
  
 ### Dịch vụ IIS
 1. IIS (Internet Information Services) là gì và các giao thức chính mà nó hỗ trợ là gì?
 2. Cổng mặc định của dịch vụ HTTP và HTTPS trên IIS lần lượt là bao nhiêu?
 3. Host Header dùng để làm gì?
 4. Virtual Directory là gì?
 5. SSL/TLS dùng để làm gì?
 6. Để chạy nhiều trang web trên cùng một địa chỉ IP vật lý và cùng một cổng (ví dụ: cổng 80) trong IIS, người ta sử dụng cơ chế nào?
 7. Application Pool trong IIS là gì và tại sao việc tách biệt các Application Pool lại quan trọng đối với bảo mật và hiệu năng?
 8. Để triển khai giao thức HTTPS trên IIS, quản trị viên cần chuẩn bị và cấu hình những thành phần gì?
 9. IIS hỗ trợ các công nghệ lập trình/framework nào ngoài ASP.NET?
 10. HTTP Compression trong IIS giúp ích gì cho hiệu năng?

### Cơ bản về mạng máy tính

 1. IP Address là gì? Subnet Mask dùng để làm gì?
 2. Public IP và Private IP khác nhau?
 3. Default Gateway là gì? Điều gì xảy ra nếu một máy tính trong mạng không được cấu hình Default Gateway?
 4. MAC Address là gì? Nó có độ dài bao nhiêu bit và cấu trúc của nó gồm những phần nào?
 5. Switch hoạt động ở tầng mấy của mô hình OSI và dựa vào thông tin gì để chuyển tiếp dữ liệu?
 6. Router hoạt động ở tầng mấy của mô hình OSI và dựa vào thông tin gì để định tuyến gói tin?
 7. Sự khác biệt chính giữa hai giao thức tầng truyền tải: TCP và UDP là gì? Cho ví dụ về ứng dụng sử dụng mỗi loại.
 8. Phân biệt giữa địa chỉ IPv4 Unicast, Broadcast và Multicast (từ thiết bị nguồn đến đích)
 9. Phân biệt giữa mạng LAN, WAN và WLAN.
 10. Mô hình Client/Server là gì?
 11. Phân biệt điểm khác nhau của Router, Hub và Switch?
 12. Cho một địa chỉ IP bất kỳ, làm thế nào để xác định được lớp IP?
 13. Nêu tên các loại thiết bị cơ bản sử dụng trong mạng LAN (ít nhất 5
    thiết bị)?
 14. Hãy nêu một số cách điều khiển máy chủ từ xa (Linux, Windows)
 15. RDP, SSH là gì? Số hiệu cổng sử dụng?
 16. Máy chủ email là gì và các cổng sử dụng?
 17. Tại sao chúng ta sử dụng DHCP?
 18. Máy chủ DHCP cấp phát các thông số nào cho các máy tính trong mạng?
     (nêu 4 thông số)
 19. Sự khác nhau giữa địa chỉ MAC và địa chỉ IP?
 20. Hãy giải thích cơ chế hoạt động của giao thức ARP (Address Resolution Protocol).

 ## II. Các câu hỏi liên quan đến mô hình Quản trị mạng đã thiết lập trong quá trình học

 1. Cấu hình DHCP (Pool IP Address, Router, DNS)
 2. Cấu hình DNS (thêm các bản ghi A, NS, …)
 3. Cấu hình DC (thêm account, group)
 4. Cấu hình IIS (tạo website để client truy cập)
 5. Chia sẽ tài nguyên (thư mục) cho client
 6. Đăng ký máy client vào Domain
 7. Đăng nhập client bằng tài khoản Domain, Local
 8. Cấu hình IP tĩnh cho client khi đã tham gia Domain
 9. Chia sẽ Internet cho client (Windows, Linux)
 10. Quản lý máy chủ bằng RDP, SSH
 11. Dựa vào sơ đồ, hãy giải thích phân vùng DMZ là gì và tại sao Server 3 (Web, FTP) lại được đặt ở đó thay vì đặt trong LAN?
 12. Server 2 đóng vai trò là Firewall. Vị trí đặt của Server 2 có ý nghĩa chiến lược gì trong việc bảo vệ vùng LAN và vùng DMZ?
 13. Khi một máy tính thuộc vùng LAN (PC0 hoặc PC1) muốn truy cập Internet, luồng dữ liệu sẽ đi qua các thiết bị nào theo thứ tự trong sơ đồ?
 14. Giả sử Server 1 (trong vùng LAN) đang chạy dịch vụ DHCP. Các máy tính PC0, PC1 có thể nhận IP từ Server 1 không? Vì sao?
 15. Nếu Server 3 (trong vùng DMZ) cũng cần nhận IP động, liệu nó có nhận được IP từ Server 1 không? Tường lửa Server 2 cần hỗ trợ tính năng gì để điều này xảy ra?
 16. Tại sao người ta khuyến nghị KHÔNG NÊN đặt dịch vụ Domain Controller (DC) chung với Web/FTP Server công cộng trên Server 3 ở vùng DMZ?
 17. Để tối ưu hóa bảo mật, các máy tính trong vùng LAN có nên kết nối trực tiếp hoặc có toàn quyền truy cập vào vùng DMZ không? Tường lửa Server 2 nên chặn hay mở các luồng giao tiếp từ DMZ ngược vào LAN?
 18. Server 1 đang chạy dịch vụ DNS cho nội bộ Domain. Nếu các Client trong mạng LAN muốn phân giải tên miền Internet (ví dụ: `google.com`), Server 1 cần được cấu hình kết nối thế nào với Server 2 và Internet?
 19. Nếu Switch 0 bị hỏng (mất nguồn hoặc lỗi phần cứng), những dịch vụ nào trong mạng LAN sẽ bị ảnh hưởng trực tiếp? Client có truy cập được Internet hay DMZ không?
 20. Đứng từ góc độ thiết kế mạng, điểm nghẽn cổ chai (Bottleneck) hoặc điểm lỗi đơn nhất (Single Point of Failure - SPoF) nằm ở thiết bị nào trong sơ đồ này?
 21. Để Client Windows trong LAN đăng nhập được vào Domain Controller trên Server 1, địa chỉ DNS Server cấu hình trên card mạng của Client phải trỏ về IP của thiết bị nào?
 22. Bản dịch NAT (Network Address Translation) sẽ được thực hiện chủ yếu trên thiết bị nào trong sơ đồ khi các Client trong LAN đi ra Internet?
 23. Tại sao đường truyền kết nối từ Server 2 ra INTERNET lại được vẽ bằng tia sét màu đỏ? Ý nghĩa tượng trưng của nó trong sơ đồ mạng Cisco Packet Tracer là gì?
 24. Nếu muốn triển khai thêm một Web Server nội bộ (chỉ cho nhân viên trong công ty xem), bạn sẽ cấu hình dịch vụ IIS đó trên Server 1 hay Server 3? Vì sao?
 25. Để quản trị từ xa Server 2 (Linux) từ một máy tính trong LAN (PC0), quản trị viên nên sử dụng giao thức bảo mật nào và tường lửa cần mở port bao nhiêu?
 
## III. Một số câu hỏi mở rộng khác trong Quản trị mạng
