import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Filme from "./pages/Filme";
import Home from "./pages/Home";
import ErroPageNotFound from "./pages/ErroPageNotFound"


function RoutesApp() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />

                <Route path="*" element={<ErroPageNotFound />} />
            </Routes>
        </BrowserRouter>


    );
}

export default RoutesApp;