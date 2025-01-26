import client from "./client";


export const login = (body)=> {
    return client.post("/auth/login", {...body});
}

export const register = (body)=> {
    return client.post("/auth/register", {...body});
}

export default {
    login,
    register
}