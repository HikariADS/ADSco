import React from 'react';
import guitarImg from '../assets/guitar1.webp';
import pianoImg from '../assets/piano1.webp';
import drumImg from '../assets/drum1.webp';
import toyImg from '../assets/toy1.webp';
import guitarImg1 from '../assets/guitar1.webp';
import guitarImg2 from '../assets/guitar2.webp';
import guitarImg3 from '../assets/guitar3.webp';
import guitarImg4 from '../assets/guitar4.webp';

const categories = [
  { name: 'Guitar', img: guitarImg },
  { name: 'Piano', img: pianoImg },
  { name: 'Trống', img: drumImg },
  { name: 'Phụ kiện', img: toyImg },
];

const featuredProducts = [
  { name: 'Đàn Guitar 1', price: '100.000.000đ', img: guitarImg1 },
  { name: 'Đàn Guitar 2', price: '100.000.000đ', img: guitarImg2 },
  { name: 'Đàn Guitar 3', price: '100.000.000đ', img: guitarImg3 },
  { name: 'Đàn Guitar 4', price: '100.000.000đ', img: guitarImg4 },
];

function Home() {
  return (
    <div className="container mt-4">
      {/* Banner */}
      <div style={{ background: 'linear-gradient(90deg,#0d8abc 60%,#fff 100%)', borderRadius: 16, padding: 32, color: '#fff', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontWeight: 700 }}>Chào mừng đến với ADS Music Store</h1>
          <p>Khám phá thế giới nhạc cụ chính hãng, giá tốt, dịch vụ tận tâm!</p>
        </div>
        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80" alt="banner" style={{ borderRadius: 12, width: 180, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} />
      </div>
      {/* Danh mục nổi bật */}
      <h3 className="mb-3">Danh mục nổi bật</h3>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <div key={cat.name} style={{ flex: '1 1 160px', background: '#f8f9fa', borderRadius: 12, padding: 24, textAlign: 'center', fontSize: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', minWidth: 140 }}>
            <img src={cat.img} alt={cat.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} />
            <div style={{ fontWeight: 600, marginTop: 8 }}>{cat.name}</div>
          </div>
        ))}
      </div>
      {/* Sản phẩm nổi bật */}
      <h3 className="mb-3">Sản phẩm nổi bật</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {featuredProducts.map((p, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 16, textAlign: 'center' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} />
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: '#0d8abc', fontWeight: 700, margin: '8px 0' }}>{p.price}</div>
            <button className="btn btn-primary btn-sm">Xem chi tiết</button>
          </div>
        ))}
      </div>
      {/* Giới thiệu */}
      <div style={{ margin: '48px 0 16px 0', background: '#f8f9fa', borderRadius: 12, padding: 32, textAlign: 'center' }}>
        <h4>ADS Music Store - Đối tác tin cậy của bạn</h4>
        <p>Chúng tôi cam kết cung cấp nhạc cụ chính hãng, bảo hành uy tín, giao hàng toàn quốc và hỗ trợ tận tâm cho mọi khách hàng yêu âm nhạc!</p>
      </div>
    </div>
  );
}

export default Home;
