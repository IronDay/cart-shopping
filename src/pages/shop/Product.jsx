import './shop.css'

export function Product(props) {
    const {id, productName, price, productImage} = props.data;
    return (
        <div className={"product"}>
            <div className="img-container">
                <img src={productImage} alt={productName}/>
            </div>
            <div className="description">
                <p><b>{productName}</b></p>
                <p style={{color:'purple',fontWeight:'bold'}}>${price}</p>
            </div>
            <button>Add To Cart</button>
        </div>
    );
}