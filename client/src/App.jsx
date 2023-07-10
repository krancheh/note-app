import './styles/App.css';
import Menu from "./components/Menu";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import AddButton from "./components/AddButton";

function App() {

    return (
        <div className="app">
            <Menu/>
            <main>
                <SearchBar/>
                <Header/>
                <NoteList/>
            </main>
            <AddButton floating={true}/>
        </div>
    );
}

export default App;
