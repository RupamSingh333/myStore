import { createContext } from "react";
const CartContext = createContext();

const CartProvider = ({children}) =>{
return <CartContext.Provider>
    {children}
</CartContext.Provider>;
}
