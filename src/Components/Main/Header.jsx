import logo from './../../assets/logo.png';
import { useEffect, useState } from "react";
const Header = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);

  return (
<header className="siteHeader">
        <div className="container">
            <div className="row">
                <div className="col-4 col-lg-4">
                    <a href="/" className="logoContainer"><img src={logo} alt="" /></a>
                </div>
                <div className="col-8 col-lg-8">
                    <ul className="button_list">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="/cart">Cart {cartItems.length}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header