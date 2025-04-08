import React from 'react';

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Phát triển website cao cấp, tối ưu hóa cho mọi thiết bị, tích hợp CMS và tốc độ tải trang cực nhanh."
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Ứng dụng di động tùy chỉnh với hiệu suất tối đa, trải nghiệm người dùng liền mạch và hỗ trợ cập nhật linh hoạt."
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Tư duy thiết kế hướng người dùng, phối màu thương hiệu và hành trình trải nghiệm tối ưu theo mục tiêu kinh doanh."
  },
  {
    id: 4,
    title: "Backend API",
    desc: "Cấu trúc API mở rộng, an toàn, dễ bảo trì và tích hợp với các dịch vụ thứ ba, hỗ trợ realtime & scale lớn."
  }
];

function Dashboard({ user }) {
  return (
    <div className="container py-4">
      <div className="bg-light p-4 rounded shadow-sm mb-4 text-center">
        <h2>Chào mừng {user.name} ({user.role})</h2>
        <p>Chúng tôi sẵn sàng hỗ trợ bạn trong mọi giải pháp công nghệ!</p>
      </div>
      <h3 className="text-center mb-4">Dịch vụ nổi bật tại ADS DEV</h3>
      <div className="row">
        {services.map(service => (
          <div className="col-12 col-md-6 mb-4" key={service.id}>
            <div className="card h-100 border-primary shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
