# 🚦 Safe Home – Về Nhà An Toàn  
### Safety-Critical Human–Computer Interaction Web Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HCI](https://img.shields.io/badge/HCI-Safety--Critical-red?style=for-the-badge)
![Web App](https://img.shields.io/badge/Web%20Application-3b82f6?style=for-the-badge)

> **Safe Home** là một ứng dụng web định hướng **Safety-Critical System**, được thiết kế theo các nguyên lý **Human–Computer Interaction (HCI)** nhằm hỗ trợ người dùng **về nhà an toàn** trong các tình huống có nguy cơ cao, đặc biệt khi **đã sử dụng rượu bia** và không đủ khả năng tự lái xe.

---

## 📖 Giới thiệu Dự án | Project Overview

Tai nạn giao thông liên quan đến rượu bia là một trong những nguyên nhân gây tử vong hàng đầu trên thế giới và tại Việt Nam. Trong nhiều trường hợp, người dùng **ý thức được rủi ro** nhưng **không có giải pháp tiện lợi, nhanh chóng và dễ sử dụng** để lựa chọn phương án an toàn hơn.

**Safe Home** được xây dựng nhằm:
- Giảm rào cản thao tác khi người dùng đang căng thẳng
- Hỗ trợ ra quyết định an toàn trong thời gian ngắn
- Áp dụng lý thuyết HCI cho **hệ thống an toàn quan trọng (Safety-Critical HCI)**

Dự án được thực hiện trong khuôn khổ môn học **Tương tác Người – Máy (HCI)**, mang tính **nghiên cứu – học thuật – thực nghiệm UX/UI**.


---

## 🎯 Key Highlights

- Safety-Critical System
- User-Centered Design
- Low Cognitive Load Interaction
- Local Network Deployment
- HCI Design Rationale & Trade-offs

---

## 📸 Screenshots

| Giao diện người dùng | Giao diện đặt |
|:---:|:---:|
| ![Giao diện](giaodienngdung.png) | ![Đặt xe](giaodiendat.png) |

---

## 🚀 Core Features

- Đặt xe về nhà an toàn
- Thuê người lái xe hộ
- Giao diện tối giản cho tình huống căng thẳng
- Tối ưu thao tác trong tình huống khẩn cấp
- Ngăn ngừa thao tác sai (Error Prevention)

---

## 🧠 HCI FRAMEWORK & DESIGN RATIONALE

### Applied HCI Principles
- User-Centered Design (UCD)
- Context-Aware Interaction
- Safety-First Interaction
- Safety-Critical HCI

### Design Trade-offs
- Ít tính năng hơn để đảm bảo dễ dùng
- Tốc độ thao tác quan trọng hơn độ đầy đủ
- Cân bằng giữa AI hỗ trợ và quyền riêng tư

**Keywords:**  
Safety-critical HCI, Design Rationale, Cognitive Load, UX under stress

---

## 🛠 Technology Stack

- Frontend: ReactJS
- Runtime: Node.js
- Package Manager: npm
- Deployment: Localhost / Local Network

---

## 🏗 Application Architecture

safe-home/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── assets/
│
├── public/
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Run

### Requirements
- Node.js (LTS)

```bash
node -v
npm -v
Install dependencies
bash
Copy code
npm install
Run application
bash
Copy code
npm run dev
Access
Local:

arduino
Copy code
http://localhost:3000
Network:

cpp
Copy code
http://192.168.xxx.xxx:3000
🌐 Local Network Mode
Ứng dụng có thể triển khai trong mạng nội bộ, chỉ cho phép các thiết bị cùng WiFi truy cập. Phù hợp cho demo môn học, nghiên cứu HCI và triển khai thử nghiệm.

🎓 Academic Purpose
Áp dụng lý thuyết Human–Computer Interaction

Phân tích hành vi người dùng trong tình huống nguy hiểm

Thiết kế Safety-Critical System

👥 Team Members
Nguyễn Gia Nam – Team Leader

Nguyễn Trần Trung Hiếu

Nguyễn Bá Việt

Lương Gia Bảo

Trịnh Hữu Mạnh

Ngô Mạnh Hiếu

Vũ Bình An

🔮 Future Work
AI nhận diện trạng thái người dùng

Gợi ý phương án an toàn tự động

Mở rộng sang Mobile App

Kết nối dịch vụ giao thông thực tế

📄 License
This project is developed for educational and research purposes only.
