import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Phát triển website cao cấp, tối ưu hóa cho mọi thiết bị, tích hợp CMS và tốc độ tải trang cực nhanh.",
    path: "/service/web"
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Ứng dụng di động tùy chỉnh với hiệu suất tối đa, trải nghiệm người dùng liền mạch và hỗ trợ cập nhật linh hoạt.",
    path: "/service/mobile"
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Tư duy thiết kế hướng người dùng, phối màu thương hiệu và hành trình trải nghiệm tối ưu theo mục tiêu kinh doanh.",
    path: "/service/uiux"
  },
  {
    id: 4,
    title: "Backend API",
    desc: "Cấu trúc API mở rộng, an toàn, dễ bảo trì và tích hợp với các dịch vụ thứ ba, hỗ trợ realtime & scale lớn.",
    path: "/service/backend"
  }
];

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!JSON.parse(localStorage.getItem("currentUser"));

  const handleClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      alert("Vui lòng đăng nhập để xem chi tiết dịch vụ.");
      navigate("/login");
    }
  };

  return (
    <div className="container py-4">
      <div className="bg-light p-4 rounded shadow-sm mb-4 text-center">
        <h2>Chào mừng đến với ADS DEV</h2>
        <p>
          Chúng tôi chuyên cung cấp dịch vụ phát triển phần mềm, ứng dụng và giải pháp công nghệ toàn diện
          cho doanh nghiệp hiện đại.
        </p>
      </div>
      <h3 className="text-center mb-4">Các dịch vụ Dev as a Service</h3>
      <div className="row">
        {services.map(service => (
          <div className="col-12 col-md-6 mb-4" key={service.id}>
            <div className="card h-100 border-success shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{service.title}</h5>
                <p className="card-text flex-grow-1">{service.desc}</p>
                <button className="btn btn-outline-success mt-2" onClick={() => handleClick(service.path)}>Xem chi tiết</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
