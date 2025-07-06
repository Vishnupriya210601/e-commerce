import { Fragment, useEffect, useState } from 'react';
import ProductsView from '../ProductsView/ProductsView';
import { useSearchParams } from 'react-router-dom';
import { Carousel, Spinner } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true); // start loading
    fetch(process.env.REACT_APP_API_URL + '/products?' + searchParams)
      .then(res => res.json())
      .then(res => {
        setProducts(res.products);
        setLoading(false); // stop loading
      })
      .catch(() => setLoading(false)); // stop loading on error
  }, [searchParams]);

  return (
    <Fragment>
      {/* Carousel Section */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img className="carousel-image" src="/images/1.jpg" alt="First slide" />
          <div className="carousel-caption-custom bg-warning text-dark text-center p-3">
            <h3>Flat 20% Off on Makeup Must-Haves!</h3>
            <p>Glow up your beauty routine with our exclusive offer on top makeup brands.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="/images/2.jpg" alt="Second slide" />
          <div className="carousel-caption-custom bg-warning text-dark text-center p-3">
            <h3>Summer Sale is On!</h3>
            <p>Enjoy sizzling discounts on your favorite products. Shop now before the season ends!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="/images/3.jpg" alt="Third slide" />
          <div className="carousel-caption-custom bg-warning text-dark text-center p-3">
            <h3>Electronics at the Best Price!</h3>
            <p>Upgrade your tech game with unbeatable deals on top electronics.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="/images/4.gif" alt="Fourth slide" />
          <div className="carousel-caption-custom bg-warning text-dark text-center p-3">
            <h3>Yellow Friday Mega Sale!</h3>
            <p>Unmissable deals across all categories—electronics, fashion, beauty, and more.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src="/images/5.jpeg" alt="Fifth slide" />
          <div className="carousel-caption-custom bg-warning text-dark text-center p-3">
            <h3>Up to 70% Off on Electronic Gadgets!</h3>
            <p>Grab unbeatable deals on smartphones, laptops, headphones, and more.</p>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Product Grid or Spinner */}
      <section id="products" className="container-fluid py-4">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            {products.map(product => (
              <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                <ProductsView product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </Fragment>
  );
}
