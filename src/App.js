import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactDOM from "react-dom";
import Login from "./login";
import LeftNav from "./leftNav";
import Registration from "./Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Login" element={<LeftNav />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
