import axios from "@/lib/axios";

export const getComments = async (
  postId: number | string
): Promise<CommentList[] | undefined> => {
  try {
    const response = await axios.get(`/posts/${postId}/comments`);

    return response.data;
  } catch {
    return undefined;
  }
};
