import React from 'react';
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import "../styles/Page.css"
import ProfilePanel from "../components/ProfilePanel";

const NotesPage = () => {
    return (
        <div className="page">
            <Menu/>
            <main>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>

                    <SearchBar/>
                    <ProfilePanel/>
                </div>
                <Header/>
                <NoteList/>
            </main>
            <AddButton floating={true}/>
        </div>
    );
};

export default NotesPage;