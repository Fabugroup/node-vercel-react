import { Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeEdit from "./components/EmployeeEdit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/emplist" element={<EmployeeList />} />
        <Route path="/edit/:empId" element={<EmployeeEdit />} />
      </Routes>
    </>
  );
}

export default App;