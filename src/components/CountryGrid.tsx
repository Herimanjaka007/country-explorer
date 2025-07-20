import type { Country } from '../types/country';
import CountryCard from './CountryCard';

interface CountryGridProps {
    countries: Country[];
    onCountryClick: (country: Country) => void;
}

const CountryGrid: React.FC<CountryGridProps> = ({ countries, onCountryClick }) => {
    if (countries.length === 0) {
        return (
            <p className="text-center text-gray-600 dark:text-gray-400 text-2xl mt-8">
                No countries found matching your search.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {countries.map(country => (
                <CountryCard key={country.cca3} country={country} onClick={onCountryClick} />
            ))}
        </div>
    );
};

export default CountryGrid;