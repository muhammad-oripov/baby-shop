import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Layout from './Layout/Layout';
import Home from './pages/Home';
import Login from "./pages/Login";
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
                    <Route path="*" exact element={'404'} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
