import { API_URL } from "./Api"

export const getPost = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }
    return response.json();
}