import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetEmployees from "./components/GetEmployees";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route index element={<GetEmployees/>}/>
          <Route path="/" element={<GetEmployees />} />
          <Route path="/get-emp" element={<GetEmployees />} />
          <Route path="/add-emp" element={<AddEmployee />} />
          <Route path="/edit-emp/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
