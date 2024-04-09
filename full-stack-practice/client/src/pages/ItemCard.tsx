import './ItemCard.css';
import { useNavigate } from 'react-router-dom';
import { Catalog } from './Catalogs';
type Props = {
  product: Catalog;
};
export function ItemCard({ product }: Props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/details', { state: product });
  }

  return (
    <div className="column-third itemCard">
      <div className="column-full" onClick={handleClick}>
        <img src={`${product.imageUrl}`} alt="images" className="image" />
      </div>

      <div className="column-full">{`${product.name}`}</div>
      <div className="column-full">{`${product.price}`}</div>
      <div className="column-full">{`${product.shortDescription}`}</div>
    </div>
  );
}
