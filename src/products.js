import {v4 as uuid} from "uuid";

import iphone from './assets/iphone.jpg';
import mac from './assets/mac.jpg';
import camera from './assets/camera.jpg';
import beer from './assets/beer.jpg';
import fan from './assets/fan.jpg';
import snicker from './assets/snicker.jpg';

export const PRODUCTS = [
    {
        id: uuid(),
        productName: 'Iphone 6',
        price: 999.0,
        productImage: iphone
    },
    {
        id: uuid(),
        productName: 'MacBook Pro',
        price: 1288,
        productImage: mac
    },
    {
        id: uuid(),
        productName: 'Canon Pro',
        price: 600,
        productImage: camera
    },
    {
        id: uuid(),
        productName: 'Fan Cooling',
        price: 150,
        productImage: fan
    },
    {
        id: uuid(),
        productName: 'Snicker Nike',
        price: 500,
        productImage: snicker
    },
    {
        id: uuid(),
        productName: 'Beer',
        price: 10,
        productImage: beer
    }
]