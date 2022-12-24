import { createContext } from "react";
const rupam =13;

const CartContext = createContext();

const CartProvider = ({children}) =>{
return <CartContext.Provider>
    {children}
</CartContext.Provider>;
}
