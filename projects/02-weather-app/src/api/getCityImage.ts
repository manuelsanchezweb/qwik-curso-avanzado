import { CityProps } from "~/types/types";

export async function getCityImage(cityName: string): Promise<CityProps> {
  try {
    const url = `https://api.unsplash.com/photos/random?query=${cityName}&orientation=landscape&client_id=${
      import.meta.env.VITE_UNSPLASH
    }`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
