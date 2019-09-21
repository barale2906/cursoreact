import { ADD_TO_CART, DELETE_FROM_CART } from "./actions"

const addToCart = id => ({
    type: ADD_TO_CART,
    id 
})

const deleteFromCart = id=>({
   type: DELETE_FROM_CART,
   id
})

export {addToCart, deleteFromCart}