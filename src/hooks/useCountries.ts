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
    currentPage: number
    paginatedCountries: Country[];
    totalPages: number;
    goToPage: (page: number) => void;
}

const ITEMS_PER_PAGE = 9;

export const useCountries = (): UseCountriesResult => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);

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
        setCurrentPage(1);
        if (!searchTerm) {
            return countries;
        }
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        return countries.filter(country =>
            country.name.common.toLowerCase().includes(lowercasedSearchTerm) ||
            country.name.official.toLowerCase().includes(lowercasedSearchTerm) ||
            (country.capital && country.capital.some(cap => cap.toLowerCase().includes(lowercasedSearchTerm)))
        );
    }, [countries, searchTerm]);

    const paginatedCountries = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredCountries.slice(startIndex, endIndex);
    }, [filteredCountries, currentPage]);

    const totalPages = useMemo(
        () => Math.ceil(filteredCountries.length / ITEMS_PER_PAGE),
        [filteredCountries]
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        } else if (page < 1) {
            setCurrentPage(1);
        } else if (page > totalPages) {
            setCurrentPage(totalPages);
        }
    };

    return {
        countries,
        filteredCountries,
        paginatedCountries,
        currentPage,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        totalPages,
        goToPage
    };
};