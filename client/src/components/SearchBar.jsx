import React from 'react';
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {findNotes} from "../store/noteListSlice"

const SearchBar = () => {
    const notes = useSelector(state => state.notes.notes)
    const dispatch = useDispatch();

    return (
        <div className='search-bar-holder'>
            <input
                id='search-bar'
                type='text' placeholder='Search'
                onChange={event => dispatch(findNotes(event.target.value))}
            />
            <SearchIcon/>
        </div>
    );
};

export default SearchBar;