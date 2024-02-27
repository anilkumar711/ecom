import Main from "./../Components/Main/Main";
import banner from "./../assets/banner.jpg";
import ProductCard from "./../Components/ProductCard";
import { useState, useEffect } from "react";
import Slider from "react-slick";

const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, SetPoducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        console.log(products);
        SetPoducts(products);
      });
  }, []);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from localStorage when the component mounts
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (data) => {
    alert("added ");
    // Add the selected product to the cart
    const updatedCartItems = [...cartItems, data];
    setCartItems(updatedCartItems);

    // Store the updated cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Main>
      <div className="homeBanner">
        <div className="bannerImage">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="productList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Featured Products</h2>
            </div>
            <Slider {...settings}>
              {products.map((res) => (
                <div className="col-md-3" key={res.id}>
                  <ProductCard
                    id={res.id}
                    image={res.image}
                    title={res.title}
                    price={res.price}
                    rating={res.rating.rate}
                    count={res.rating.count}
                    addToCart={addToCart}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>


    </Main>
  );
};

export default Home;
