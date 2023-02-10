import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {Cart} from "./pages/cart/Cart.jsx";
import {Shop} from "./pages/shop/Shop.jsx";
import {ShopContextProvider} from "./context/ShopContext.jsx";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Shop/>}/>
                        <Route path={"/cart"} element={<Cart/>}/>
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    )
}

export default App
