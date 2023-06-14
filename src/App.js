import './styles/App.css'
import Menu from "./components/Menu";
import NoteList from "./components/NoteList";
import {ReactComponent as SearchIcon} from "./assets/search-icon.svg";
import {useState} from "react";
import Note from "./components/Note";


function App() {

    const notes = [
        {id: 1, title: 'Note 2', text: 'Lorem ipsum keke skks asdnasdaio as daskdn aksdaasd asd asdasp! As.'},
        {id: 2, title: 'Note 1', text: 'Рандом текстик 1'},
        {id: 3, title: 'Note 3', text: 'Рандом текстик 3'},
        {id: 4, title: 'Note 4', text: 'Рандом текстик 4'},
    ];

    const [currentNotes, setCurrentNotes] = useState(notes);

    function findNotes(searchText) {
        searchText = searchText.toLowerCase();
        setCurrentNotes(notes.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText)))
        console.log(currentNotes);
    }

    return (
        <div className="App">
            <Menu></Menu>
            <main>
                <div className='search-bar-holder'>
                    <input
                        id='search-bar'
                        type='text' placeholder='Search'
                        onChange={event => findNotes(event.target.value)}
                    />
                    <SearchIcon/>
                </div>
                <h1>Notes</h1>

                <NoteList key={currentNotes} notes={currentNotes}></NoteList>
            </main>
        </div>
    );
}

export default App;
