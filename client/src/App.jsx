import './styles/App.css';
import Menu from "./components/Menu";
import NoteList from "./components/NoteList";
import DeleteModal from "./components/DeleteModal";
import SearchBar from "./components/SearchBar";
import {useState} from "react";

function App() {

    const [viewMode, setViewMode] = useState('vm-tiles')
    
    const handleVMChange = (e) => {
        setViewMode(e.target.value);
    }

    return (
        <div className="App">
            <Menu></Menu>
            <main>
                <SearchBar/>
                <div className="header">
                    <h1>Notes</h1>
                    <div className="vm-buttons">
                        <input type="radio" name="vm-radio" className="vm-radio" id="vm-tiles" value="vm-tiles" checked={viewMode === 'vm-tiles'} onChange={handleVMChange}/>
                        <label className="vm-label vm-label__tiles" htmlFor="vm-tiles"></label>
                        <input type="radio" name="vm-radio" className="vm-radio" id="vm-list" value="vm-list" checked={viewMode === 'vm-list'} onChange={handleVMChange}/>
                        <label className="vm-label vm-label__list" htmlFor="vm-list"></label>
                    </div>
                </div>
                <NoteList viewMode={viewMode}></NoteList>
            </main>
            <DeleteModal/>
        </div>
    );
}

export default App;
