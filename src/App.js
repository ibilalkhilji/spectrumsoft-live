import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
