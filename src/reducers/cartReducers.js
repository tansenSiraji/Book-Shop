export const cartReducers = (state, action) => {
    const { type, payload } = action;
    console.log(type, payload, state)
    switch (type) {
        case "ADD_TO_CART":
            return {...state, cartList: payload.products, total: payload.total};

        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products, total: payload.total};

        case "CLEAR_CART":
            return {...state, cartList: payload.products, total: payload.total};

        default:
            throw new Error("No Case Found!");

    }
}