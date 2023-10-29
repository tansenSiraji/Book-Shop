async function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const bsid = JSON.parse(sessionStorage.getItem("bsid"));

    return { token: token, id: bsid };
}


export async function getUser() {
    const browserData = await getSession();
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.id}`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const browserData = await getSession();
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.id}`, requestOptions)

    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const browserData = await getSession();

    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
        body: JSON.stringify(order)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions)

    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();
    return data
}