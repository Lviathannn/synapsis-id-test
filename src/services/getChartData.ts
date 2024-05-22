import axios from 'axios';

interface DataType {
  name: string;
  uv: number;
  pv: string;
  amt: string;
}

export const getChartData = async (): Promise<DataType[] | undefined> => {
  try {
    const response = await axios.get(
      `https://jsonblob.com/api/1242658258652356608`,
    );

    return response.data;
  } catch {
    return undefined;
  }
};
