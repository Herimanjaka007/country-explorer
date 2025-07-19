export interface Country {
    name: {
        common: string;
        official: string;
    }
    capital?: string[];
    region: string;
    population: number;
    area: number;
    latlng: [number, number];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    cca3: string;
}