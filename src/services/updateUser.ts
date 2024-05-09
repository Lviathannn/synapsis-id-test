import axios from "@/lib/axios";

export const updateUser = async (userId: number, data: CreateUser) => {
  try {
    const response = await axios.put(`/users/${userId}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
