import type { CreatePost } from "../types/TypeCreatePost";
import { API_URL } from "./Api"

export const createPost = async (data: CreatePost) => {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to create post')
    }

    return response.json();
}

