## 起動方法

### Backend

docker build -t backend .
docker run -p 8080:8080 -d backend

### Frontend

docker build -t frontend .
docker run -p 3000:80 -d frontend
