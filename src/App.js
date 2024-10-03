
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import Login from '../src/pages/LogIn'

// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";

import "./App.scss";

// const db = getDatabase(app);
function App() {
  // const putData = () => {
  //   set(ref(db, "users/rajan"), {
  //     id: 1,
  //     name: "rajan",
  //     age: 21,
  //   });
  // };

  return (
    <div className="App">
    <Router>
      <Routes>

        <Route path="/" element ={<Login/>} />
        <Route path="/Signup" element ={<Signup/>} />
        <Route path="/Home" element ={<Home/>} />
        <Route path="/Login" element ={<Login/>} />

      </Routes>
    
    </Router>
    
    </div>
  );
}

export default App;
