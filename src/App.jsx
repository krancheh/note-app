import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";
import NotePage from "./pages/NotePage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/notes" element={<NotesPage/>}/>
            <Route path="notes/:id" element={<NotePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
