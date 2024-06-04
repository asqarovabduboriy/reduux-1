import { legacy_createStore,combineReducers } from "redux";
import { wishlistReducer } from "./reducer/wishlist";
import { AddCartReducer,incrementquantity,decrementquantity,removeItem } from "./reducer/AddCart";
const reducer = combineReducers({
    wishlist:wishlistReducer,
    cart:AddCartReducer,
    incrementquantity,
    decrementquantity,
    removeItem

});
 const store = legacy_createStore(reducer);
 export default store