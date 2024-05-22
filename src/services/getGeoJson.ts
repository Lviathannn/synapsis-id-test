import axios from 'axios';

interface DataType {
  properties: {
    id: number;
    name: string;
  };

  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

export const getGeoJson = async (): Promise<DataType[] | undefined> => {
  try {
    const response = await axios.get(
      `https://jsonblob.com/api/1242748452529364992`,
    );
    return response.data;
  } catch {
    return undefined;
  }
};
