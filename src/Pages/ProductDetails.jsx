import Main from './../Components/Main/Main';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../Components/StarRating';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [stroage, setStroage] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setProduct(data);
          });
      }, [id]);



      useEffect(() => {
        setStroage(JSON.parse(localStorage.getItem('stroage')));
      }, [])
      
      function clickHandle(resId, resPrice, resTitle) {
        const productIndex = products.findIndex(product => product.id === resId);
        let updatableProduct = { ...products[productIndex] };
        updatableProduct.title = resTitle;
        updatableProduct.price = resPrice;
      
        // Update the state and localStorage
        setStroage(stroage => {
          const newProductList = [...stroage];
          newProductList[productIndex] = updatableProduct;
          localStorage.setItem('stroage', JSON.stringify(newProductList));
          return newProductList;
        })
      }
      
      
      console.log(stroage);







  return (
    <Main>
    <div className="ProductDetails">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt="" />
                </div>
                <div className="col-md-6">
                    {product.rating ? (<StarRating rating={product.rating.rate} count={product.rating.count} />) : ' '}
                    

                <span>Price: ${product.price}</span>
                    <h2>{product.title}</h2>
                    {product.description ? (<p>{product.description}</p>) : ''}
                    
                    <button className='addToCard' onClick={() => clickHandle()}>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
    </Main>
  )
}

export default ProductDetails