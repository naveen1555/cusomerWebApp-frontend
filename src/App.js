import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";
import EmptyField from "./components/EmptyField";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmptyField />} />
            <Route path="/test" element={<Test />} />
            <Route path="/custumor/:id" element={<UserDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
