import './styles/common/App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";
import NotePage from "./pages/NotePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotesService from "./services/NotesService";

function App() {

    const noteLoader = async ({params}) => {
        return NotesService.getNoteById(params.id);
    }

    const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path="note-app">
                <Route index element={<WelcomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="signup" element={<SignupPage/>}/>
                <Route path="notes" element={<NotesPage/>}/>
                <Route path="notes/:id" loader={noteLoader} element={<NotePage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    ))

    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
}

export default App;
