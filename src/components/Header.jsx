import React from 'react';
import '../styles/Header.css'
import {useDispatch, useSelector} from "react-redux";
import {selectViewMode, setViewMode} from "../store/notesSlice";

const Header = () => {

    const dispatch = useDispatch();
    const viewMode = useSelector(selectViewMode);

    const handleVMChange = (e) => {
        const viewMode = e.target.value;
        dispatch(setViewMode(viewMode))
    }

    return (
        <div className="header">
            <h1>Notes</h1>
            <div className="vm-buttons">
                <input type="radio" name="vm-radio" className="vm-radio" id="vm-tiles" value="vm-tiles" checked={viewMode === 'vm-tiles'} onChange={handleVMChange}/>
                <label className="vm-label vm-label__tiles" htmlFor="vm-tiles"></label>
                <input type="radio" name="vm-radio" className="vm-radio" id="vm-list" value="vm-list" checked={viewMode === 'vm-list'} onChange={handleVMChange}/>
                <label className="vm-label vm-label__list" htmlFor="vm-list"></label>
            </div>
        </div>
    );
};

export default Header;