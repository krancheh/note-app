import './styles/App.css';
import Menu from "./components/Menu";
import NoteList from "./components/NoteList";
import DeleteModal from "./components/DeleteModal";
import SearchBar from "./components/SearchBar";

function App() {

    return (
        <div className="App">
            <Menu></Menu>
            <main>
                <SearchBar/>
                <div className="header">
                    <h1>Notes</h1>
                    <div className="vm-buttons">
                        <input type="radio" name="vm-radio" className="vm-radio-button" id="vm-tiles-mode"
                               value="tiles"/>
                        <label className="vm-label vm-label__tiles" htmlFor="vm-tiles-mode"></label>
                        <input type="radio" name="vm-radio" className="vm-radio-button" id="vm-list-mode" value="list"/>
                        <label className="vm-label vm-label__list" htmlFor="vm-list-mode"></label>
                    </div>
                </div>
                <NoteList></NoteList>
            </main>
            <DeleteModal/>
        </div>
    );
}

export default App;
