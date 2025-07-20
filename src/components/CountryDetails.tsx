import type { Country } from '../types/country';

interface CountryDetailsProps {
    country: Country;
    onClose: () => void;
}

const CountryDetails = ({ country, onClose }: CountryDetailsProps) => {
    if (!country) {
        return null;
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-4xl mx-auto my-8">
            <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">
                    {country.name.common} Details
                </h2>
                <button
                    onClick={onClose}
                    className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md
                     hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Countries
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:col-span-1">
                    <img
                        src={country.flags.png}
                        alt={country.flags.alt || `${country.name.common} flag`}
                        className="w-full h-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                    />
                </div>
                <div className="md:col-span-1 text-gray-800 dark:text-gray-200 text-lg">
                    <p className="mb-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Official Name:</span> {country.name.official}</p>
                    <p className="mb-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Capital:</span> {country.capital?.join(', ') || 'N/A'}</p>
                    <p className="mb-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Region:</span> {country.region}</p>
                    <p className="mb-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Population:</span> {country.population.toLocaleString()}</p>
                    <p className="mb-2"><span className="font-semibold text-blue-600 dark:text-blue-400">Area:</span> {country.area.toLocaleString()} km²</p>
                    <p className="mb-2"><span className="font-semibold text-blue-600 dark:text-blue-400">CCA3 Code:</span> {country.cca3}</p>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;