import {createContext} from "react";
export const ShopContext = createContext(null);
export function ShopContextProvider(props) {

    return (
        <ShopContext.Provider>{props.children}</ShopContext.Provider>
    );
}