import React from 'react';
import Menu from "../components/common/Menu";
import SearchBar from "../components/notes/SearchBar";
import Header from "../components/common/Header";
import NoteList from "../components/notes/NoteList";
import AddButton from "../components/notes/AddButton";
import "../styles/common/Page.css"
import ProfilePanel from "../components/user/ProfilePanel";
import CheckEffect from "../components/common/CheckEffect";

const NotesPage = () => {
    return (
        <div className="page">
            <CheckEffect/>
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