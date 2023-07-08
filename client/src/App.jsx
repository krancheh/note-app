import './styles/App.css';
import Menu from "./components/Menu";
import NoteList from "./components/NoteList";
import DeleteModal from "./components/DeleteModal";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {

    return (
        <div className="App">
            <Menu></Menu>
            <main>
                <SearchBar/>
                <Header></Header>
                <NoteList></NoteList>
            </main>
            <DeleteModal/>
        </div>
    );
}

export default App;
