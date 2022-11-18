import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Repos from './components/repos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


export const config = {
    baseUrl: `https://api.github.com`,
}


const App = () => {
    return (
        <div>
            <Header />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/:username" element={<Repos />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;