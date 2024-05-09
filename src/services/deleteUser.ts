import axios from "@/lib/axios";

export const deleteUser = async (userId: number) => {
  try {
    const response = await axios.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
