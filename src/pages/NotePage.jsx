import React from 'react';
import {useLoaderData} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Menu from "../components/common/Menu";
import BigNote from "../components/notes/BigNote";
import "../styles/common/Page.css"
import "../styles/notes/NotePage.css"
import CheckEffect from "../components/common/CheckEffect";

const NotePage = () => {
    const {data} = useLoaderData();
    const note = data;

    if (!note) return <NotFoundPage/>;
    return (
        <div className="page note-page">
            <CheckEffect/>

            <Menu withNoteList={true}/>
            <main>
                <BigNote note={note}/>
            </main>
        </div>
    );
};

export default NotePage;