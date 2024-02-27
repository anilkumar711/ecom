import Main from "./../Components/Main/Main";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const removeProduct = (productId) => {
    const updatedProducts = cartItems.filter(product => product.id !== productId);
    console.log(updatedProducts);
    localStorage.setItem('cartItems', JSON.stringify(updatedProducts));
    setCartItems(updatedProducts);
  };



  return (
    <Main>
      <div className="cardProduct py-5">
        <div className="container">
          <h1 className="mb-5 text-center">Cart </h1>
          {cartItems.length > 0 ? (
            <div className="row">
              {cartItems.map((item, id) => (
                <div key={id} className="col-md-3">
                  <div className="productCard">
                    <div className="resImage">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="cardInfo">
                      <span>{item.price}</span>
                      <h4><a href={`/product/${item.id}`}>{item.title}</a></h4>
                      <button className='addToCard' onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No items stored in localStorage.</p>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Cart;
