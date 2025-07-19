import type { Country } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1";
const LIMITED_FIELDS: string = 'name,capital,region,population,area,flags,latlng,cca3';


/**
 * 
 * @returns Promise<Country[]>
 * @description Fetches all countries from the REST Countries API.
 * @throws Will throw an error if the fetch operation fails or if the response is not ok
 */
export const getAllCountries = async (): Promise<Country[]> => {
    try {
        const URL = `${BASE_URL}/all?fields=${LIMITED_FIELDS}`;
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Http error: ${response.status}`);
        }
        const data: Country[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error when getting all contries :", error);
        throw error;
    }
};

export const getContryByName = async (name: string): Promise<Country | null> => {
    try {
        const URL = `${BASE_URL}/name/${name}`;
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Http error: ${response.status}`);
        }
        const data: Country[] = await response.json();
        return data[0] || null;
    } catch (error) {
        console.error("Error when getting country by name :", error);
        throw error;
    }
}