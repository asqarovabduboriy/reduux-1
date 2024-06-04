import { ADDCART,DECREMENTQUANTITY,INCREMENTQUANTITY,REMOVECART } from "../action/action";


const initialState = {
    cart: JSON.parse(localStorage.getItem("carts")) || [],
}
export const AddCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCART:
            let index = state.cart?.findIndex(
                (el) => el?.id === action?.payload?.id
              );
              if (index < 0) {
                state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
              }
              localStorage.setItem("carts", JSON.stringify(state.cart));
            return {
                ...state,
            }
        default:
            return state
    }
}

export const incrementquantity = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTQUANTITY:
           let index = state.cart?.findIndex((el) => el.id === action.payload.id)
           state.cart?.map((el,i) => {
               index === i ? {...el, quantity: el.quantity ++} : el
           })
           localStorage.setItem("carts", JSON.stringify(state.cart))
            return {
                ...state
            }
        default:
            return state
    }
}

export const decrementquantity = (state = initialState, action) => {
    switch (action.type) {
        case DECREMENTQUANTITY:
           let index = state.cart?.findIndex((el) => el.id === action.payload.id)
           state.cart?.map((el,i) => {
               index === i ? {...el, quantity: el.quantity --} : el
           })
           localStorage.setItem("carts", JSON.stringify(state.cart))
            return {
                ...state
            }
        default:
            return state
    }
}

export const removeItem = (state = initialState, action) => {
    switch (action.type) {
        case REMOVECART:
           let index = state.cart?.findIndex((el) => el.id === action.payload.id)
           state.cart = state.cart.filter((el,i) => index !== i)
           localStorage.setItem("carts", JSON.stringify(state.cart))
            return {
                ...state
            }
        default:
            return state
    }
}   