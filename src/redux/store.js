import { createStore } from "redux"
import { ADD_TO_CART, DELETE_FROM_CART } from "./actions"
import { composeWithDevTools } from "redux-devtools-extension"


const initialStore = {
    cart: []
}

const rootReducer = (state = initialStore, {type, id})=> { // en este caso action (que es un objeto por eso se puede) fue reemplazado por {type,id}

    

    if(type === ADD_TO_CART){

        if(state.cart.find(a=> a === id)) return state // debido a que se ha reemplazado action por {type,id}, se quito la palabra action en action.id

        return{
            ...state,
            cart: state.cart.concat(id)
        }
        
    }
    
    if(type=== DELETE_FROM_CART){
        return{
            ...state,
            cart: state.cart.filter(c=>c!==id)
        }
    }

    return state

}

export default createStore(rootReducer,composeWithDevTools())
