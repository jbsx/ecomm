import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router className="App">
	    <Header/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="login" element={<Login/>} />
        </Routes>
    </Router>
  );
}

export default App;
