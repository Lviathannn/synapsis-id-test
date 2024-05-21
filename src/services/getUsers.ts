import axios from "@/lib/axios";

export const getUsers = async (
  page: string,
  limit: string
): Promise<User[]> => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=${limit}`);
    return response.data;
  } catch {
    return [];
  }
};
