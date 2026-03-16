import { API_URL } from "./Api"

export const deletePost = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}/`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete post")
    }
}