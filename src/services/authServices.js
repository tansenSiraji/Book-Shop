export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(authDetail)
  }

  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("bsid", JSON.stringify(data.user.id));
  }
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return data;
}


export async function register(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(authDetail)
  }

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
  const data = await response.json();
  console.log(data)

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("bsid", JSON.stringify(data.user.id));
  }
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  return data;
}


export async function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("bsid");

}