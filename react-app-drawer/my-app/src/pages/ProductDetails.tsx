import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toDollars } from '../lib';
import './ProductDetails.css';

export function ProductDetails() {
  const navigate = useNavigate();

  const location = useLocation();
  const product = location.state;
  function handleAddToCart() {
    alert(`Added ${product?.name} to cart`);
    navigate('/');
  }

  /*   if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  } */
  if (!product) return null;
  const { name, imageUrl, price, shortDescription, longDescription } = product;
  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Link to="/" className="btn text-secondary">
                &lt; Back to catalog
              </Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={imageUrl} alt={name} className="image" />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{name}</h2>
              <h5 className="text-secondary">{toDollars(price)}</h5>
              <p>{shortDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="long-description">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
