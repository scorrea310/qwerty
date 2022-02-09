import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import calculateOriginalPrice from '../../utils/calculateOriginalPrice';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const {
    user_id: userId,
    title,
    price,
    // discount,
    stock,
    user,
  } = product;

  // currently hardcoded, cause no seed data with discount yet
  let discount = 10;

  const { original, saving } = calculateOriginalPrice(price, discount);

  return (
    <div className="product-details">
      <div className="seller-details">
        <Link to={`/users/${userId}`} className={'seller-details-link'}>
          {user.username}
        </Link>
        <div>
          {/* TODO render stars for rating */}
          <span>Rating</span>
          {user.rating}
        </div>
      </div>
      <div>
        <h1 className="product-heading">{title}</h1>
      </div>
      <div className="product-price-details">
        <div className="product-price-details-top">
          <p className="price-with-discount">{`$${price}`}</p>
          {discount > 0 && (
            <span className="price-before-discount">{`$${original}`}</span>
          )}
        </div>
        <div className="product-price-details-bottom">
          {discount > 0 && (
            <p className="discount">{`You save $${saving} (${discount}%)`}</p>
          )}
          {/* TODO in stock, out of stock, low stock */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
