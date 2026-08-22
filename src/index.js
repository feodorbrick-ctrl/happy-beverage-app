import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let Context = createContext(null)

function ContextProvider({children}) {
    const [switchedBeverage, setSwitchedBeverage] = useState(null)

    const contextValue = {
        switchedBeverage,
        setSwitchedBeverage,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ContextProvider>
                <App />
            </ContextProvider>
        </React.StrictMode>
    </BrowserRouter>
);