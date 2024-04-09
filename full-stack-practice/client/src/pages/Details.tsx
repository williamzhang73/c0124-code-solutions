import { useLocation, useNavigate } from 'react-router-dom';
import './Details.css';
export function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  if (item) {
    return (
      <div className="">
        <div className="image-div">
          <img
            src={`${item?.imageUrl}`}
            alt="product images"
            className="image"
          />
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
