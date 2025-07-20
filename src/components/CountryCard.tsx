import type { Country } from '../types/country';

interface CountryCardProps {
    country: Country;
    onClick: (country: Country) => void;
}

const CountryCard = ({ country, onClick }: CountryCardProps) => {
    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                 overflow-hidden cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
            onClick={() => onClick(country)}
        >
            <img
                src={country.flags.png}
                alt={country.flags.alt || `${country.name.common} flag`}
                className="w-full h-40 object-cover border-b border-gray-200 dark:border-gray-700"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{country.name.common}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                        <span className="font-semibold">Capital:</span> {country.capital?.join(', ') || 'N/A'}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                        <span className="font-semibold">Region:</span> {country.region}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;