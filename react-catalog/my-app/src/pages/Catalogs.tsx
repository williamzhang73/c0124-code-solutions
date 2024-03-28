import { products } from '../lib/data';
import { ItemCard } from './ItemCard';
import './Catalogs.css';

export function Catalogs() {
  const mapped = products.map((product, index) => (
    <ItemCard key={index} product={product} />
  ));
  return (
    <>
      <div className="catalog-title">Catalogs</div>
      <div className="catalog-row">{mapped}</div>
    </>
  );
}
