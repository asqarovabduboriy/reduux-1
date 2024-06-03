import { legacy_createStore,combineReducers } from "redux";
import { wishlistReducer } from "./reducer/wishlist";
const reducer = combineReducers({
    wishlist:wishlistReducer
});
 const store = legacy_createStore(reducer);
 export default store