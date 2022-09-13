import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Layout from './Layout/Layout';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Navigate to='/home' replace />} />
                    <Route path="/home" exact element={<Home />} />
                    <Route path="*" exact element={'404'} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
