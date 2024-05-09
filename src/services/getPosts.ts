import axios from "@/lib/axios";

export const getPosts = async (
  page: number | string,
  limit: number
): Promise<Post[]> => {
  try {
    const response = await axios.get(`posts?page=${page}&per_page=${limit}`);
    return response.data;
  } catch {
    return [];
  }
};
