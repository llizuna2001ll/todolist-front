import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from './pages/Login';

function App() {
  return (

      <div className="App">

        <Router>
          <div>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/login' element={<Login />}></Route>
                <Route  path={"*"} element={<PageNotFound/>}></Route>
              </Routes>
          </div>
        </Router>
      </div>

  );
}

export default App;
