import { API_URL } from "./Api";

export const updatePost = async (
    id: number,
    data: { title: string; content: string }
) => {

    const response = await fetch(`${API_URL}/${id}/`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )

    if (!response.ok) {
        throw new Error("Failed to update post")
    }

    return response.json();

}