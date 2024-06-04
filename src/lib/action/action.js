export const TOGLELIKE = "TOGLELIKE";
export const ADDCART = "ADDCART";
export const REMOVECART = "REMOVECART";
export const INCREMENTQUANTITY = "INCREMENTQUANTITY";
export const DECREMENTQUANTITY = "DECREMENTQUANTITY";

export const toggleLike = () => {
    return {
        type: TOGLELIKE,

    };
}

export const addToCart = () => {
    return {
        type: ADDCART

    }
}

export const removeItem = () => {
    return {
        type: REMOVECART
    }
}

export const incrementquantity = () => {
    return {
        type: INCREMENTQUANTITY
    }
}


export const decrementquantity = () => {
    return {
        type: DECREMENTQUANTITY
    }
}

