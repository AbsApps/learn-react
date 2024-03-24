import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";


//Ahora usaremos el Hook Reducer

// Creamos este hook para poder consumir o manipular el context

export const useCart = () => {
    const context = useContext(CartContext)

    /**
     * Good Practice: Verificar si el contexto retorna undefined
     * si es asi quiere decir que estamos tratando de usarlo 
     * desde alguna parte donde no tiene alcance
     */
    if(context === undefined){
        console.log(`useCart must be used within a CartProvider`)
        throw new Error(`useCart must be used within a CartProvider`)
    }

    return context
}