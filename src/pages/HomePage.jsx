import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import guitar1 from '../assets/guitar1.webp';
import guitar2 from '../assets/guitar2.webp';
import piano2 from '../assets/piano2.webp';
import drum2 from '../assets/drum2.webp';
import toy2 from '../assets/toy2.webp';
import deal from '../assets/deal.webp';
import placeholder from '../assets/toy1.webp';
import guitar4 from '../assets/guitar4.webp';
import piano1 from '../assets/piano1.webp';
import piano3 from '../assets/piano3.webp';
import piano4 from '../assets/piano4.webp';
import piano5 from '../assets/piano5.webp';
import drum1 from '../assets/drum1.webp';
import toy1 from '../assets/toy1.webp';
import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogBlock from '../components/BlogBlock';
import SpecialsBlock from '../components/SpecialsBlock';
import Footer from '../components/Footer';

function HomePage({ user }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  // Danh sách ảnh banner hero
  const heroBanners = [
    {
      image: deal,
      alt: 'Fender Standard Series',
      link: '/products',
    },
    {
      image: guitar1,
      alt: 'Guitar Demo',
      link: '/products',
    },
    {
      image: placeholder,
      alt: 'Placeholder',
      link: '/products',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error('Lỗi khi tải danh sách sản phẩm');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi tải danh sách sản phẩm');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Lỗi khi xóa sản phẩm');
      }

      alert('Xóa sản phẩm thành công!');
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi xóa sản phẩm');
    }
  };

  const handleUpdateProduct = async (product) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error('Lỗi khi cập nhật sản phẩm');
      }

      alert('Cập nhật sản phẩm thành công!');
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi cập nhật sản phẩm');
    }
  };

  const handleAddProduct = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error('Lỗi khi thêm sản phẩm');
      }

      alert('Thêm sản phẩm thành công!');
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi thêm sản phẩm');
    }
  };

  // Dữ liệu sản phẩm nổi bật với ảnh local
  const featuredProducts = [
    {
      id: 1,
      name: 'Guitar Demo 1',
      price: '1.000.000',
      image: guitar1,
      category: 'Guitar & Bass'
    },
    {
      id: 2,
      name: 'Guitar Demo 2',
      price: '2.000.000',
      image: guitar2,
      category: 'Guitar & Bass'
    },
    {
      id: 3,
      name: 'Piano Demo',
      price: '3.000.000',
      image: piano2,
      category: 'Keyboard & Piano'
    },
    {
      id: 4,
      name: 'Drum Demo',
      price: '4.000.000',
      image: drum2,
      category: 'Drums'
    }
  ];

  const pianoImages = [piano1, piano2, piano3, piano4, piano5];
  const randomPianoImage = useMemo(() => {
    return pianoImages[Math.floor(Math.random() * pianoImages.length)];
  }, []);

  // Dữ liệu danh mục với ảnh local
  const categories = [
    {
      id: 1,
      name: 'Guitar & Bass',
      image: guitar4,
      count: 150,
      slug: 'guitar'
    },
    {
      id: 2,
      name: 'Keyboard & Piano',
      image: randomPianoImage,
      count: 80,
      slug: 'piano'
    },
    {
      id: 3,
      name: 'Drums',
      image: drum1,
      count: 60,
      slug: 'drum'
    },
    {
      id: 4,
      name: 'Toys',
      image: toy1,
      count: 40,
      slug: 'toys'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section - Slider */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 mb-4">Khám Phá Thế Giới Âm Nhạc</h1>
              <p className="lead mb-4">Tìm kiếm nhạc cụ và thiết bị âm thanh chất lượng cao từ các thương hiệu hàng đầu thế giới.</p>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/products')}>Mua Sắm Ngay</button>
            </div>
            <div className="col-md-6">
              <Slider {...sliderSettings} className="hero-slider">
                {heroBanners.map((banner, idx) => (
                  <div key={idx} className="hero-slider-item">
                    <Link to={banner.link}>
                      <img src={banner.image} alt={banner.alt} className="hero-slider-img" />
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Categories */}
      <section className="categories-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Danh Mục Nổi Bật</h2>
          <div className="row gx-4 gy-4">
            {categories.map(category => (
              <div key={category.id} className="col-12 col-sm-6 col-md-3 d-flex">
                <Link
                  to={`/category/${category.slug}`}
                  className="category-card w-100"
                  style={{ pointerEvents: 'auto', zIndex: 1000, position: 'relative' }}
                >
                  <div className="category-image">
                    <img src={category.image} alt={category.name} className="img-fluid" />
                  </div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.count} sản phẩm</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="featured-products-block py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Sản Phẩm Nổi Bật</h2>
          <div className="row gx-4 gy-4">
            {products.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-md-3 d-flex">
                <div className="product-card w-100">
                  <div className="product-image">
                    <img src={product.imageUrl || placeholder} alt={product.name} className="img-fluid" />
                    <div className="product-overlay">
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        Xem Chi Tiết
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">{product.price?.toLocaleString('vi-VN')}đ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specials/Hot Deals */}
      <SpecialsBlock />

      {/* 5. Blog & Tin Tức */}
      <BlogBlock />

      {/* 6. Promotional Banner */}
      <section className="promo-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Khuyến Mãi Đặc Biệt</h2>
              <p className="lead mb-4">Giảm giá lên đến 30% cho các sản phẩm được chọn. Áp dụng cho đến hết tháng.</p>
              <Link to="/deals" className="btn btn-outline-light btn-lg">Xem Ngay</Link>
            </div>
            <div className="col-md-6">
              <img src={placeholder} alt="Special Promotion" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="newsletter-section py-5">
        <div className="container text-center">
          <h2 className="mb-4">Đăng Ký Nhận Tin</h2>
          <p className="lead mb-4">Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt</p>
          <form className="newsletter-form">
            <div className="input-group mx-auto" style={{ maxWidth: '500px' }}>
              <input type="email" className="form-control" placeholder="Email của bạn" />
              <button className="btn btn-primary" type="submit">Đăng Ký</button>
            </div>
          </form>
        </div>
      </section>

      {/* Product Management Section - Only visible for admin */}
      {user?.role === 'admin' && (
        <section className="admin-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">Quản lý sản phẩm</h2>
            <div className="row mb-4">
              <div className="col-12">
                <button 
                  className="btn btn-primary"
                  onClick={() => setEditingProduct({})}
                >
                  Thêm sản phẩm mới
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price?.toLocaleString('vi-VN')}đ</td>
                      <td>
                        <button 
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => setEditingProduct(product)}
                        >
                          Sửa
                        </button>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Product Edit Modal */}
      {editingProduct && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingProduct.id ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}</h5>
                <button type="button" className="btn-close" onClick={() => setEditingProduct(null)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (editingProduct.id) {
                    handleUpdateProduct(editingProduct);
                  } else {
                    handleAddProduct(editingProduct);
                  }
                }}>
                  <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingProduct.name || ''}
                      onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Giá</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editingProduct.price || ''}
                      onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mô tả</label>
                    <textarea
                      className="form-control"
                      value={editingProduct.description || ''}
                      onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">URL Hình ảnh</label>
                    <input
                      type="url"
                      className="form-control"
                      value={editingProduct.imageUrl || ''}
                      onChange={(e) => setEditingProduct({...editingProduct, imageUrl: e.target.value})}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {editingProduct.id ? 'Cập nhật' : 'Thêm mới'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default HomePage; 