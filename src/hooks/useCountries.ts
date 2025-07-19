import { useState, useEffect, useMemo } from 'react';
import { getAllCountries } from '../api/restcountries';
import type { Country } from '../types/country';

interface UseCountriesResult {
    countries: Country[];
    filteredCountries: Country[];
    loading: boolean;
    error: string | null;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const useCountries = (): UseCountriesResult => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAllCountries();
                setCountries(data);
            } catch (err) {
                console.error("Failed to fetch countries:", err);
                setError("Failed to load countries. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const filteredCountries = useMemo(() => {
        if (!searchTerm) {
            return countries;
        }
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        return countries.filter(country =>
            country.name.common.toLowerCase().includes(lowercasedSearchTerm) ||
            country.name.official.toLowerCase().includes(lowercasedSearchTerm)
        );
    }, [countries, searchTerm]);

    return {
        countries,
        filteredCountries,
        loading,
        error,
        searchTerm,
        setSearchTerm,
    };
};