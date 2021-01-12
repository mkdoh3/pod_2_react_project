import "./App.css";
import DogContainer from "./containers/DogContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path={"/"} component={DogContainer} />
                    <Route
                        exact
                        path={"/favorites"}
                        component={FavoritesContainer}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default App;
