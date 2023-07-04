import React from 'react';
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg";
import '../styles/SearchBar.css';
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../store/notesSlice";

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const searchQuery = event.target.value;
        dispatch(setSearchQuery(searchQuery))
    }

    return (
        <div className='search-bar-holder'>
            <input
                id='search-bar'
                type='search' placeholder='Search'
                onChange={handleSearch}
            />
            <SearchIcon/>
        </div>
    );
};

export default SearchBar;