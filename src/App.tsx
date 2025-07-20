import { useCountries } from './hooks/useCountries';
import { useState } from 'react';
import SearchBar from './components/common/SearchBar';
import ToggleSwitch from './components/common/ToggleSwitch';
import CountryGrid from './components/CountryGrid';
import MapView from './components/MapView';
import CountryDetails from './components/CountryDetails';
import type { Country } from './types/country';

function App() {
    const { filteredCountries, loading, error, searchTerm, setSearchTerm } = useCountries();
    const [isMapView, setIsMapView] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const handleCloseDetails = () => {
        setSelectedCountry(null);
    };

    if (selectedCountry) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 font-sans">
                <CountryDetails country={selectedCountry} onClose={handleCloseDetails} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 font-sans">
            <header className="text-center py-6 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 tracking-tight">Country Explorer</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Discover countries around the world.</p>
            </header>

            <main className="container mx-auto px-4 py-8">
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-2xl text-blue-500 dark:text-blue-300 animate-pulse">Loading countries...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-600 dark:text-red-400 text-lg mt-8 p-4 bg-red-100 dark:bg-red-900 rounded-lg shadow-md">
                        <p>Error: {error}</p>
                        <p>Please check your internet connection or try again later.</p>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <section className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                            <div className="w-full md:w-auto flex-grow">
                                <SearchBar
                                    searchTerm={searchTerm}
                                    onSearchChange={setSearchTerm}
                                    placeholder="Search by country name or capital..."
                                />
                            </div>
                            <div className="w-full md:w-auto flex justify-center md:justify-end">
                                <ToggleSwitch
                                    label1="List View"
                                    label2="Map View"
                                    isChecked={isMapView}
                                    onToggle={setIsMapView}
                                />
                            </div>
                        </section>

                        <p className="text-center text-xl mb-6 text-gray-700 dark:text-gray-300">
                            Showing {filteredCountries.length} countries.
                        </p>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl min-h-[500px]">
                            {filteredCountries.length > 0 ? (
                                isMapView ? (
                                    <MapView countries={filteredCountries} onCountryClick={handleCountryClick} />
                                ) : (
                                    <CountryGrid countries={filteredCountries} onCountryClick={handleCountryClick} />
                                )
                            ) : (
                                <p className="text-center text-gray-600 dark:text-gray-400 text-2xl">No countries found matching your search criteria.</p>
                            )}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

export default App;