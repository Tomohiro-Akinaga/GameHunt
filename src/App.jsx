import { SearchContext } from "./SearchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import "./index.scss";

function App() {
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </SearchContext.Provider>
    );
}

export default App;
