import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Layout from './Layout/Layout';
import Home from './pages/Home';
import Liked from "./pages/Liked";
import Login from "./pages/Login";
import Cabinet from "./pages/Mycabinet_page/Cabinet";
import Product from "./pages/Product/Product";
import SearchPage from "./pages/search/SearchPage";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/search" exact element={<SearchPage />} />
                    <Route path="/product" exact element={<Product />} />
                    <Route path="/liked" exact element={<Liked />} />
                    <Route path="/cabinet" exact element={<Cabinet />} />
                    <Route path="*" exact element={'404'} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
