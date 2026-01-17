🚦 SAFE HOME – VỀ NHÀ AN TOÀN
Ứng dụng Web HCI cho Hệ thống An toàn Quan trọng (Safety-Critical System)
A Safety-Critical Human–Computer Interaction Web Application
🇻🇳 GIỚI THIỆU DỰ ÁN

Safe Home – Về nhà an toàn là một ứng dụng web được phát triển nhằm hỗ trợ người dùng di chuyển về nhà an toàn, đặc biệt trong các tình huống đã sử dụng rượu bia hoặc không đủ khả năng tự lái xe.

Dự án được xây dựng trong khuôn khổ môn học Tương tác Người – Máy (Human–Computer Interaction – HCI), tập trung nghiên cứu cách thiết kế giao diện và tương tác cho các hệ thống an toàn quan trọng (Safety-Critical Systems).

Ứng dụng không chỉ giải quyết bài toán chức năng, mà còn đặt trọng tâm vào:

Trạng thái tâm lý người dùng

Hành vi trong tình huống căng thẳng

Giảm tải nhận thức khi ra quyết định

🇺🇸 PROJECT INTRODUCTION

Safe Home is a web-based application designed to help users return home safely, especially in situations where users have consumed alcohol or are not in a suitable condition to drive.

This project is developed as part of the Human–Computer Interaction (HCI) course, focusing on the design and evaluation of Safety-Critical Systems.

Beyond functionality, Safe Home emphasizes:

User mental state

Stressful decision-making scenarios

Cognitive load reduction through interaction design

🎯 MỤC TIÊU | OBJECTIVES
🇻🇳 Mục tiêu

Giảm thiểu tai nạn giao thông liên quan đến rượu bia

Hỗ trợ đặt xe / thuê người lái xe hộ

Giao diện đơn giản, dễ sử dụng trong tình huống khẩn cấp

Áp dụng nguyên lý HCI vào thiết kế hệ thống an toàn

🇺🇸 Objectives

Reduce alcohol-related traffic accidents

Support ride booking or designated driver services

Provide a simple and stress-friendly user interface

Apply HCI principles in safety-critical system design

🧠 HCI FRAMEWORK & DESIGN RATIONALE
🇻🇳 Khung HCI áp dụng

User-Centered Design (UCD)

Context-Aware Interaction

Safety-First Interaction

Safety-Critical HCI

🇺🇸 Applied HCI Frameworks

User-Centered Design (UCD)

Context-Aware Interaction

Safety-First Interaction

Safety-Critical HCI

🎯 Design Trade-offs | Đánh đổi thiết kế

Ít tính năng hơn để đảm bảo dễ dùng khi căng thẳng

Cân bằng giữa AI chủ động và quyền riêng tư người dùng

Giảm thao tác để tránh sai sót trong tình huống nguy hiểm

🛠️ CÔNG NGHỆ | TECHNOLOGIES

Frontend: ReactJS

Runtime: Node.js

Package Manager: npm

Deployment: Localhost / Local Network

📂 CẤU TRÚC DỰ ÁN | PROJECT STRUCTURE
safe-home/
│
├── src/              # Source code
├── public/           # Static files
├── package.json      # Project configuration
├── README.md         # Documentation
└── ...

🚀 HƯỚNG DẪN CÀI ĐẶT & CHẠY | INSTALLATION & RUN
1️⃣ Yêu cầu | Requirements

Node.js (LTS recommended)

Kiểm tra:

node -v
npm -v

2️⃣ Cài thư viện | Install dependencies
npm install

3️⃣ Chạy ứng dụng | Run the app
npm run dev

4️⃣ Truy cập | Access

Local:

http://localhost:3000


Network (same WiFi):

http://192.168.xxx.xxx:3000

🌐 CHẠY TRONG MẠNG NỘI BỘ | LOCAL NETWORK MODE
🇻🇳

Ứng dụng có thể chạy trong mạng nội bộ, chỉ cho phép các thiết bị cùng WiFi truy cập, phù hợp cho:

Demo tại lớp

Nghiên cứu HCI

Triển khai tại quán/khu vực cụ thể

🇺🇸

The application can be deployed in a local network environment, allowing access only for devices connected to the same WiFi, suitable for:

Classroom demonstrations

HCI research

Controlled deployment environments

🎓 MỤC ĐÍCH HỌC THUẬT | ACADEMIC PURPOSE

Áp dụng lý thuyết Human–Computer Interaction

Phân tích hành vi người dùng trong tình huống rủi ro

Thiết kế giao diện cho Safety-Critical Systems

👥 NHÓM THỰC HIỆN | TEAM MEMBERS

Nguyễn Gia Nam – Team Leader

Nguyễn Trần Trung Hiếu

Nguyễn Bá Việt

Lương Gia Bảo

Trịnh Hữu Mạnh

Ngô Mạnh Hiếu

Vũ Bình An

📌 GHI CHÚ | NOTES

Dự án phục vụ mục đích học tập & nghiên cứu

Một số chức năng nâng cao đang được đề xuất cho phát triển tương lai

📄 LICENSE

This project is developed for educational and research purposes only.
