# ADSco - Website Bán Nhạc Cụ

Website bán nhạc cụ sử dụng React và MongoDB.

## Yêu cầu hệ thống

- Node.js (v18 trở lên)
- MongoDB (v7.0 trở lên)
- npm hoặc yarn

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/HikariADS/ADSco.git
cd ADSco
```

2. Cài đặt dependencies cho frontend:
```bash
npm install
```

3. Cài đặt dependencies cho backend:
```bash
cd backend
npm install
```

4. Tạo file .env trong thư mục backend:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/adsco
```

## Chạy ứng dụng

1. Khởi động MongoDB:
```bash
mongod
```

2. Khởi động backend (trong thư mục backend):
```bash
npm run dev
```

3. Khởi động frontend (trong thư mục gốc):
```bash
npm start
```

Ứng dụng sẽ chạy tại:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Cấu trúc dự án

```
ADSco/
├── src/                # Frontend source code
│   ├── api/           # API calls
│   ├── components/    # React components
│   ├── pages/         # Page components
│   └── assets/        # Static assets
├── backend/           # Backend source code
│   ├── routes/        # API routes
│   ├── models/        # Database models
│   └── config/        # Configuration files
└── package.json       # Project dependencies
``` 