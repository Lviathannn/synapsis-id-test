import axios from "@/lib/axios";

export const createUser = async (data: CreateUser) => {
  try {
    const response = await axios.post(`/users`, {
      ...data,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
