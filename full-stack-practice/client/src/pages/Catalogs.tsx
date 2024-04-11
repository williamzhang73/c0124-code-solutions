import { useEffect, useState } from 'react';
import { ItemCard } from './ItemCard';
import './Catalogs.css';
export type Catalog = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  longDescription: string;
  shortDescription: string;
};
export function Catalogs() {
  const [dataLists, setDataLists] = useState<Catalog[]>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function get() {
      try {
        const response = await fetch('/api/catalogs');
        if (!response.ok) {
          throw new Error(`fetch data failed ${response.status}`);
        }
        const data = await response.json();
        setDataLists(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    get();
  }, []);
  if (isLoading) return <div>Page is loading.</div>;
  if (error) return <div>Fetch data error.</div>;
  const mapped = dataLists?.map((dataList, index) => (
    <ItemCard product={dataList} key={index} />
  ));
  return (
    <>
      <h3>Catalogs</h3>
      <div className="itemCard">{mapped}</div>
    </>
  );
}
