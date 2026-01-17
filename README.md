# 🎓 Hệ thống Gợi ý Lịch học Cá nhân hóa (Personal Study Schedule Recommendation System)

> **Đồ án Tốt nghiệp Cử nhân Công nghệ thông tin**
>
> 👨‍🎓 **Sinh viên thực hiện:** Hà Khắc Huy
> <br>
> 👨‍🏫 **Giảng viên hướng dẫn:** Ths. Phạm Tuấn Anh

## 📖 Giới thiệu
Hệ thống hỗ trợ sinh viên xây dựng lộ trình học tập tối ưu dựa trên năng lực, sở thích và quỹ thời gian cá nhân. Dự án áp dụng kỹ thuật **Machine Learning** để cá nhân hóa gợi ý, giúp sinh viên cân bằng giữa việc học và cuộc sống.

## 🚀 Công nghệ sử dụng (Tech Stack)

Dự án được xây dựng theo kiến trúc **Microservices** (Service-oriented) với 3 thành phần chính:

* **Frontend:** ReactJS (Vite), TypeScript.
* **Backend:** NestJS (Node.js), TypeScript.
* **AI Service:** Python, FastAPI, Scikit-learn (Machine Learning).
* **Database:** MongoDB.
* **Authentication:** JWT (JSON Web Token).

## 📂 Cấu trúc dự án
```text
graduation-project/
├── backend/        # API Gateway & Business Logic (NestJS)
├── frontend/       # User Interface (ReactJS)
└── ai-service/     # ML Model & Recommendation Engine (FastAPI)
