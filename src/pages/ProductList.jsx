import React from 'react';

function ProductList() {
  return (
    <div className="container mt-4">
      <h2>Danh mục sản phẩm</h2>
      <div style={{ display: 'flex' }}>
        <aside style={{ minWidth: 220, marginRight: 24 }}>
          <div style={{ background: '#f8f9fa', borderRadius: 8, padding: 16 }}>
            <h5>Bộ lọc</h5>
            <div>Loại đàn</div>
            <div>Giá</div>
            <div>Hãng</div>
          </div>
        </aside>
        <main style={{ flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
                <div style={{ height: 120, background: '#eee', borderRadius: 8, marginBottom: 8 }}></div>
                <h6>Tên sản phẩm {i}</h6>
                <div>Giá: ...</div>
                <button className="btn btn-primary btn-sm mt-2">Xem chi tiết</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductList; 