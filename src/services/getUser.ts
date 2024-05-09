import axios from "@/lib/axios";

export const getUser = async (userId: number): Promise<User | undefined> => {
  try {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  } catch {
    return undefined;
  }
};
