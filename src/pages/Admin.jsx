import React from 'react';

function Admin() {
  return (
    <div className="container mt-4">
      <h2>Quản trị hệ thống</h2>
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1, background: '#f8f9fa', borderRadius: 8, padding: 24 }}>
          <h5>Quản lý sản phẩm</h5>
          <button className="btn btn-primary btn-sm">Thêm sản phẩm</button>
        </div>
        <div style={{ flex: 1, background: '#f8f9fa', borderRadius: 8, padding: 24 }}>
          <h5>Quản lý đơn hàng</h5>
        </div>
        <div style={{ flex: 1, background: '#f8f9fa', borderRadius: 8, padding: 24 }}>
          <h5>Quản lý người dùng</h5>
        </div>
      </div>
    </div>
  );
}

export default Admin; 