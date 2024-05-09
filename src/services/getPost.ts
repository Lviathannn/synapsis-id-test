import axios from "@/lib/axios";

export const getPost = async (
  postId: number | string
): Promise<Post | undefined> => {
  try {
    const response = await axios.get(`/posts/${postId}`);
    return response.data;
  } catch {
    return undefined;
  }
};
