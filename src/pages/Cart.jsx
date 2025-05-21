import React from 'react';

function Cart() {
  return (
    <div className="container mt-4" style={{ maxWidth: 700 }}>
      <h2>Giỏ hàng</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[1,2].map(i => (
            <tr key={i}>
              <td>Tên sản phẩm {i}</td>
              <td>1</td>
              <td>...</td>
              <td><button className="btn btn-danger btn-sm">Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'right', marginTop: 16 }}>
        <b>Tổng tiền: ...</b>
      </div>
      <div style={{ textAlign: 'right', marginTop: 16 }}>
        <button className="btn btn-success">Thanh toán</button>
      </div>
    </div>
  );
}

export default Cart; 