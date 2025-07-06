import { Link } from 'react-router-dom';
import './ProductsView.css';

export default function ProductsView({ product }) {
  return (
    <div className="product-view w-100 h-100">
      <div className="card p-3 rounded h-100 d-flex flex-column">
        <div className="product-image-wrapper">
          <img
            className="product-image"
            src={product.images[0].image}
            alt={product.name}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="card-text">INR {product.price}</p>
          <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
