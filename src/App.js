import './App.css';
import NavigateMenu from "./components/UI/NavigateMenu/navigateMenu";
import BuyProductMenu from "./components/UI/buyProductMenu/buyProductMenu";


function App() {
    return (
        <div className="App">
            <NavigateMenu/>
            <BuyProductMenu/>
        </div>
    );
}

export default App;
