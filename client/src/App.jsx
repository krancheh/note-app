import './styles/App.css'
import Menu from "./components/Menu";
import NoteList from "./components/NoteList";
import DeleteModal from "./components/DeleteModal";
import SearchBar from "./components/SearchBar";


function App() {


    // function findNotes(searchText) {
    //     searchText = searchText.toLowerCase();
    //     setCurrentNotes(notes.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText)))
    // }


    return (
        <div className="App">
            <Menu></Menu>
            <main>
                <SearchBar/>
                <h1>Notes</h1>
                <NoteList></NoteList>
            </main>
            <DeleteModal/>
        </div>
    );
}

export default App;
