import React, { useState } from 'react'
import "./Product.scss"
import { faShoppingCart, faHeart, faScaleBalanced, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );
  
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <p>{ data?.attributes?.desc}</p>
        <span className="price">${data?.attributes?.price}</span>
              
        <div className="quantity">
                <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>
                  <FontAwesomeIcon icon={faMinus}/>
          </button>
          {quantity}
                <button onClick={() => setQuantity(prev => prev + 1)}>
                <FontAwesomeIcon icon={faPlus}/>
          </button>
        </div>
              <button className="add" onClick={() => dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity
        }))}>
            <FontAwesomeIcon icon={faShoppingCart}/> Add to cart
        </button>
        <div className="links">
          <div className="item">
            <FontAwesomeIcon icon={faHeart}/> Add to wishlist
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faScaleBalanced}/> Add to compare
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
                <span>Product Type:</span>
              <span>Tag: Dress, Women, Floral</span>
            </div>
            <hr />
            <div className="info">
              <span>Additional Information</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
        </>
      )}
    </div>
  )
}

export default Product