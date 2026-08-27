import './App.css';
import AppRouter from "./components/AppRouter";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
    }, []);
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
