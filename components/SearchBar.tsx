    import React from 'react';
    import { SearchIcon } from './Icons';

    interface SearchBarProps {
        searchTerm: string;
        onSearchChange: (term: string) => void;
    }

    const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
        return (
            <div className="mb-8 relative">
                <input
                    type="text"
                    placeholder="Search for your favorite vibe..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-[#4A4E69] text-white placeholder-gray-400 p-4 pl-12 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9A8C98] transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <SearchIcon />
                </div>
            </div>
        );
    };

    export default SearchBar;
