import React from 'react';
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import "../styles/NotesPage.css"

const NotesPage = () => {
    return (
        <div className="notes-page">
            <Menu/>
            <main>
                <SearchBar/>
                <Header/>
                <NoteList/>
            </main>
            <AddButton floating={true}/>
        </div>
    );
};

export default NotesPage;