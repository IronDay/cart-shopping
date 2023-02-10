import {useContext} from "react";
import ShopContext from "../../context/ShopContext.jsx";
import './shop.css'
import shopContext from "../../context/ShopContext.jsx";

export function Product(props) {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(shopContext);

    return (
        <div className={"product"}>
            <div className="img-container">
                <img src={productImage} alt={productName}/>
            </div>
            <div className="description">
                <p><b>{productName}</b></p>
                <p style={{color: 'purple', fontWeight: 'bold'}}>${price}</p>
            </div>
            <button onClick={() => {
                addToCart(id);
                console.log(cartItems)
            }}>Add To Cart
            </button>
        </div>
    );
}