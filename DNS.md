### 1. DNS là gì ?
DNS ( Domain Name System) là hệ thống cho phép ánh xạ từ địa têm miền sang địa chỉ IP. Cơ sở dữ liệu được cài đặt phân tán theo kiến trúc phân cấp `name server`.

### 2. Phân cấp DNS server
#### a. Root DNS Servers
Được liên lạc bởi name server địa phương 

Nếu không biết ánh xạ tên miền mà Local DNS yêu cầu :
- Liên lạc name server có thẩm quyền 
- Lấy ánh xạ tên
- Trả lại cho Local DNS

######Sơ đồ 13 DNS Root server trên Internet (năm 2012):

<img src="http://i.imgur.com/XdHDP9x.png">

#### b. Top-level domain (TLD) servers

Chịu trách nhiệm cho các miền .com, .org, .net, .edu, ... và tất cả các tên miền cấp quốc gia như .vn, .uk, .jp.

Các công ty sẽ chịu trách nhiệm về các tên miền này, ví dụ như :

- Công ty Verisign Global Registry Services duy trì com TLD.
- Công ty Educause duy trì các edu TLD.

Xem thêm tại [IANA-TLD](http://www.iana.org/domains/root/db) 

#### c. Authoritative DNS servers
	
Mỗi máy tính phải đăng ký tới một Authoritative name server. Thông thường authoritative name server của một máy tính là name server trong miền [ISP](https://vi.wikipedia.org/wiki/Nh%C3%A0_cung_c%E1%BA%A5p_d%E1%BB%8Bch_v%E1%BB%A5_Internet) của máy tính đó.


#### d. Local Name Server
Không nhất thiết phải thuộc hệ thống phân cấp

Mỗi ISP có một Local Name Server (default name server)

Khi host tạo truy vấn DNS, truy vấn được gửi đến Local Name Server đầu tiên, nó hoạt động như một proxy để chuyển truy vấn đến hệ thống phân cấp

### 3. Nguyên tắc hoạt động 
#### a. Truy vấn đệ quy (recursive query)

<img src="http://i.imgur.com/fwhrRTB.png">

Khi máy tính hay name server A gửi thông điệp yêu cầu tới name server B, name server B thay mặt A nhận thông điệp chứa kết quả và sau đó gửi tới A.

#### b. Truy vấn tương tác (iteractive)

<img src="http://i.imgur.com/O7zRfSi.png">

Khi name server A gửi truy vấn tương tác tới name server B, nếu name server không có ánh xạ được yêu cầu, nó sẽ gửi cho A thông điệp trả lời chứa địa chỉ IP của name server kế tiếp trên chuỗi, chẳng hạn name server C.

Sau đó name server A trực tiếp gửi thông điệp yêu cầu tới name server C.

### 4. Các bản ghi DNS 
DNS tổ chức theo mô hình CSDL phân tán lưu trữ các bản ghi tài nguyên Resource Records (RR)

Định dạng RR : **(name, value, type, ttl)**

| Type | Name | Value | 
|------|------|-------|
|   A | hostname | IP address |
| CNAME | alias hostname | canonical hostname |
| 	NS | domain | name of an authoritative DNS |
|	MX | canonical name of mail server | alias hostname |

### 5. Định dạng gói tin DNS 
<img src="http://i.imgur.com/SgX2dw9.png">

##### Header section (12 bytes)
<img src="http://i.imgur.com/sWq5Mfk.png">

- **identification** : số thứ tự (16 bit), nối giữa repply nhận được và queries gửi đi.
- **flags** : 

| Field name | Size | Description |
|------------|------|-------------|
| QR | 1 bit | 0: query, 1: repply |
| Opcode | 4 bits | Xác định loại thông điệp mang theo, 0: cờ hiệu truy vấn, 1: truy vấn ngược, 2: tình trạng truy vấn |
| AA | 1 bit | 1: repply có thẩm quyền |
| TC | 1 bit | 1: thông điệp bị chia ra |
| RD | 1 bit | 1: tiếp tục truy vấn đệ quy |
| RA | 1 bit | 1: truy vấn được thực thi trên server |
| Z |  3 bits | Đặt bằng 0 để dành |
| RCode | 4 bits | 0: lỗi truy vấn, 1: lỗi định dạng gói tin, 2:server trục trặc, 3: lỗi tên, 4: không thể thi hành, 5: server từ chối thực thi |

- **number of questions** : số lần truy vấn của một gói tin trong một vấn đề
- **number of answer RRs** : số tài nguyên tham gia trong phần trả lời 
- **number of authority RRs** : lượng tài nguyên được ghi lại trong phần có thẩm quyền của gói tin
- **number of additional RRs** : lượng tài nguyên được ghi lại trong phần thêm vào của gói tin

##### Question section 
Chứa thông tin về truy vấn được tạo ra, bao gồm tên và kiểu trường cho truy vấn.

##### Answers section 
Chứa các Resource Record cho câu trả lời truy vấn.

##### Authority section 
Chứa các bản ghi của server có thẩm quyền.

##### Additional section
Các thông tin mở rộng có thể được dùng. 

### 6. Sử dụng Wireshark bắt gói tin DNS
- Bật Wireshark để bắt gói tin và truy cập bằng Browser vào một trang web nào đó.

- Stop bắt gói tin và lọc theo phương thức `dns`

###### Gói tin truy vấn
Thông điệp truy vấn gửi từ host `192.168.0.219` đến Local Name Server `8.8.8.8` (Google) 

Question section chứa name : `assets-cdn.github.com`, type : `A`, class : `IN`

<img src="http://i.imgur.com/S9Eif9N.png">

###### Gói tin trả lời
Thông điệp trả lời mà Local Name Server `8.8.8.8` trả về cho host `192.168.0.219` 

Có 2 câu trả lời được gửi về, mỗi câu trả lời bao gồm các thông tin về name, type, class, TTL, data length và value.

<img src="http://i.imgur.com/iKMzb87.png">

### 7. Tham khảo 

Book : Computer Networking A Top-Down Approach 6th-edition - Kurose Ross.

http://www.tcpipguide.com/free/t_DNSMessageHeaderandQuestionSectionFormat.htm

https://vi.wikipedia.org/wiki/DNS