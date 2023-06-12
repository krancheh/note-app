import './styles/App.css'
import LeftMenu from "./components/LeftMenu";
import NoteList from "./components/NoteList";


function App() {

    const notes = [
        {id: 1, title: 'Заметка 2', text: 'Рандом текстик 2'},
        {id: 2, title: 'Заметка 1', text: 'Рандом текстик 1'},
        {id: 3, title: 'Заметка 3', text: 'Рандом текстик 3'},
        {id: 4, title: 'Заметка 4', text: 'Рандом текстик 4'},
    ]

    return (
        <div className="App">
            <LeftMenu></LeftMenu>
            <NoteList notes={notes}></NoteList>
        </div>
    );
}

export default App;
