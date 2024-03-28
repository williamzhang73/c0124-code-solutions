import './ItemCard.css';
import { Link } from 'react-router-dom';
export type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};
type Props = {
  product: Product;
};
export function ItemCard({ product }: Props) {
  return (
    <div className="Single-column-third">
      <Link to={`/details/${product.productId}`}>
        <div className="column-full">
          <img src={`${product.imageUrl}`} alt="images" />
        </div>
      </Link>
      <div className="column-full">{`${product.name}`}</div>
      <div className="column-full">{`${product.price}`}</div>
      <div className="column-full">{`${product.shortDescription}`}</div>
    </div>
  );
}
