import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from './ItemCard';
import { readProduct } from '../lib/read';
import './Details.css';

export function Details() {
  const [item, setItem] = useState<Product>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIslLoading] = useState(true);
  const { itemId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function work() {
      try {
        const item = await readProduct(Number(itemId));
        setItem(item);
      } catch (error) {
        setError(error);
      } finally {
        setIslLoading(false);
      }
    }
    work();
  }, [itemId]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>data fetch failed</div>;
  }

  if (item) {
    return (
      <div className="">
        <div className="">
          <img src={`${item?.imageUrl}`} alt="product images" />
        </div>
        <div className="">
          <div>{`${item?.name}`}</div>
          <div>{`${item?.price}`} </div>
          <div>{`${item?.shortDescription}`}</div>
        </div>
        <div className="">{`${item?.longDescription}`}</div>
        <button
          className="save-button"
          onClick={() => {
            alert(`${item?.name} added`);
            navigate('/');
          }}>
          Save to cart
        </button>
      </div>
    );
  }
}
