
import StarRating from "./StarRating";
const ProductCard = ({id, image, title, price, rating, count, addToCart }) => {
  return (
    <div className="productCard">
      <div className="resImage">
        <img src={image} alt={{title}} />
      </div>
      <div className="cardInfo">
      {rating ? (<StarRating rating={rating} count={count} />) : ' '}
      <span>${price}</span>
        <h4><a href={`/product/${id}`}>{title}</a></h4>
        <button className='addToCard' onClick={() => addToCart({id, image, title, price})}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard