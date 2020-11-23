import "./App.css";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import MoviesList from "./components/MoviesList";
import MovieDesc from "./components/MovieDesc";
import Login from "./components/Login";
import Register from "./components/Register";
import Favorites from "./components/Favorites";
import { GlobalContext } from "./context/GlobalContext";
require("dotenv").config();

function App() {
  const { isAuth, loadUser } = useContext(GlobalContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div className="App">
        {isAuth && <NavBar />}
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/movies" component={MoviesList} />
        <Route path="/movies/:id" component={MovieDesc} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </Router>
  );
}

export default App;
