🚦 Safe Home – Về Nhà An Toàn
Safety-Critical Human–Computer Interaction Web Application








Safe Home là một ứng dụng web định hướng Safety-Critical System, được thiết kế theo các nguyên lý Human–Computer Interaction (HCI) nhằm hỗ trợ người dùng về nhà an toàn trong các tình huống có nguy cơ cao, đặc biệt khi đã sử dụng rượu bia và không đủ khả năng tự lái xe.

📖 Giới thiệu Dự án | Project Overview

Tai nạn giao thông liên quan đến rượu bia là một trong những nguyên nhân gây tử vong hàng đầu trên thế giới và tại Việt Nam. Trong nhiều trường hợp, người dùng ý thức được rủi ro nhưng không có giải pháp tiện lợi, nhanh chóng và dễ sử dụng để lựa chọn phương án an toàn hơn.

Safe Home được xây dựng nhằm:

Giảm rào cản thao tác khi người dùng đang căng thẳng

Hỗ trợ ra quyết định an toàn trong thời gian ngắn

Áp dụng lý thuyết HCI cho hệ thống an toàn quan trọng (Safety-Critical HCI)

📌 Dự án được thực hiện trong khuôn khổ môn học Tương tác Người – Máy (HCI), mang tính nghiên cứu – học thuật – thực nghiệm UX/UI.

🎯 Key Highlights (Điểm nổi bật)

🔴 Safety-Critical System: Thiết kế cho tình huống rủi ro cao

🧠 User-Centered Design: Tập trung vào tâm lý người dùng khi căng thẳng

⚡ Low Cognitive Load: Giảm số bước, giảm suy nghĩ

🌐 Local Network Deployment: Phù hợp demo, triển khai nội bộ

📚 HCI Design Rationale & Trade-offs được phân tích rõ ràng

📸 Giao diện & Demo (Screenshots)

(Thêm ảnh demo giao diện tại đây để tăng tính trực quan và điểm trình bày)

Trang chủ	Đặt xe
Home UI	Booking UI
Trạng thái khẩn cấp	Xác nhận
Emergency Mode	Confirmation
🚀 Chức năng Chính | Core Features

🚗 Đặt xe về nhà an toàn

👤 Thuê người lái xe hộ

🧭 Giao diện tối giản cho tình huống căng thẳng

⚠️ Tối ưu thao tác cho tình huống khẩn cấp

🔒 Hạn chế thao tác sai (Error Prevention)

🧠 HCI FRAMEWORK & DESIGN RATIONALE
Khung HCI áp dụng

User-Centered Design (UCD)

Context-Aware Interaction

Safety-First Interaction

Safety-Critical HCI

Design Trade-offs

Ít tính năng hơn để đảm bảo dễ sử dụng

Tốc độ thao tác > Tính đầy đủ

Cân bằng giữa AI hỗ trợ và quyền riêng tư người dùng

📌 Keywords:
Safety-critical HCI · Design Rationale · Cognitive Load · UX under stress

🛠 Công nghệ Sử dụng | Tech Stack

Frontend: ReactJS

Runtime: Node.js

Package Manager: npm

Deployment: Localhost / Local Network

🏗 Kiến trúc Ứng dụng | Application Architecture
safe-home/
│
├── src/
│   ├── components/      # UI Components
│   ├── pages/           # Main Screens
│   ├── services/        # Logic & API handling
│   └── assets/          # Images & icons
│
├── public/
├── package.json
└── README.md

⚙️ Cài đặt & Hướng dẫn chạy | Installation & Run
1️⃣ Yêu cầu

Node.js (LTS)

node -v
npm -v

2️⃣ Cài thư viện
npm install

3️⃣ Chạy ứng dụng
npm run dev

4️⃣ Truy cập

Local:

http://localhost:3000


Network (cùng WiFi):

http://192.168.xxx.xxx:3000

🌐 Chạy trong mạng nội bộ | Local Network Mode

Ứng dụng có thể triển khai chỉ cho phép truy cập trong cùng mạng WiFi, phù hợp:

Demo môn học

Môi trường nghiên cứu

Triển khai tại quán/khu vực cụ thể

🎓 Mục đích Học thuật | Academic Purpose

Áp dụng lý thuyết Human–Computer Interaction

Phân tích hành vi người dùng trong tình huống nguy hiểm

Thiết kế hệ thống Safety-Critical System

👥 Nhóm Thực Hiện | Team Members

Nguyễn Gia Nam – Team Leader

Nguyễn Trần Trung Hiếu

Nguyễn Bá Việt

Lương Gia Bảo

Trịnh Hữu Mạnh

Ngô Mạnh Hiếu

Vũ Bình An

🔮 Định hướng Phát triển | Future Work

Tích hợp AI nhận diện trạng thái người dùng

Tự động đề xuất phương án an toàn

Mở rộng sang Mobile App

Kết nối dịch vụ giao thông thực tế

📄 License

This project is developed for educational and research purposes only.
