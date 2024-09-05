import React from 'react';
import {TextField} from "@fluentui/react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    return (
        <TextField
            placeholder="Search by name or email"
            onChange={(_, newValue) => onSearch(newValue || '')}
            styles={{root: {marginBottom: '20px'}}}
        />
    );
};

export default SearchBar;