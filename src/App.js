import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router basename="/spectrumsoft-live">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
