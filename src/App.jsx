import './styles/common/App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";
import NotePage from "./pages/NotePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/common/Layout";
import RequireAuth from "./components/common/RequireAuth";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route errorElement={<ErrorPage/>}>
            <Route path="note-app" element={<Layout/>}>
                {/* Public routes */}
                <Route index element={<WelcomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="signup" element={<SignupPage/>}/>

                {/* Private routes */}
                <Route element={<RequireAuth/>}>
                    <Route path="test" element={<TestPage/>}/>
                    <Route path="notes" element={<NotesPage/>}/>
                    <Route path="notes/:id" element={<NotePage/>}/>
                </Route>
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
