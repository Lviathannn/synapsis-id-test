import axios from "@/lib/axios";

export const getUsers = async (page: string): Promise<User[]> => {
  try {
    const response = await axios.get(`/users?page=${page}`);
    return response.data;
  } catch {
    return [];
  }
};
