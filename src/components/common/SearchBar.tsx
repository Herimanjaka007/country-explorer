interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    placeholder?: string;
}

const SearchBar = ({ searchTerm, onSearchChange, placeholder }: SearchBarProps) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm w-full max-w-md
                   focus:ring-blue-500 focus:border-blue-500 outline-none
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 ease-in-out"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    )
}

export default SearchBar