import React from 'react';
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import "../styles/Page.css"

const NotesPage = () => {
    return (
        <div className="page">
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