import axios from "@/lib/axios";

export const postComment = async (postId: number, body: string) => {
  try {
    const response = await axios.post(`/posts/${postId}/comments`, {
      post_id: postId,
      name: "Leviathan",
      email: "example@gmail.com",
      body,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
