import React from 'react';
import {ReactComponent as SearchIcon} from "../../assets/icons/search-icon.svg";
import '../../styles/notes/SearchBar.css';
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../features/notes/notesSlice";

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        dispatch(setSearchQuery({searchQuery}))
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