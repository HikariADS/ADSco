import React, { useMemo } from 'react';
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

function HomePage() {
  const navigate = useNavigate();

  // Danh sách ảnh banner hero (dùng ảnh thật nếu có, chưa có thì để placeholder)
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
            {featuredProducts.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-md-3 d-flex">
                <div className="product-card w-100">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} className="img-fluid" />
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
                    <p className="category">{product.category}</p>
                    <p className="price">{product.price} VNĐ</p>
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
      <Footer />
    </div>
  );
}

export default HomePage; 