import client from "./client";

export const FindUser = async (searchQuery) => {
    return client.get(`/auth/search/?search=${searchQuery}`);
}