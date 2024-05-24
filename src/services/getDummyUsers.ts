import axios from 'axios';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

export const getDummyUsers = async (): Promise<DataType[] | undefined> => {
  try {
    const response = await axios.get(
      `https://jsonblob.com/api/1242413608184176640`,
    );
    return response.data.data;
  } catch {
    return undefined;
  }
};
