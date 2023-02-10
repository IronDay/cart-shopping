import {PRODUCTS} from '../../products';
import {Product} from "./Product.jsx";

import './shop.css'

export function Shop() {
    return (
        <div className={"shop"}>
            <div className={"shopTitle"}>
                <h1>My Store</h1>
            </div>

            <div className="products">
                {
                    PRODUCTS.map((product) => {
                        return <Product data={product}/>
                    })
                }
            </div>
        </div>
    );
}