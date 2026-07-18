import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

// npm install @mui/icons-material @mui/material
// npm install @emotion/react @emotion/styled

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  console.log(employees);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://node-vercel-postgress-beige.vercel.app/employees");
      const data = await response.json();
      console.log(data);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  // delete employee
  const deleteEmployee = async (Id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `https://node-vercel-postgress-beige.vercel.app/employees/${Id}`,
          {
            method: "DELETE",
          },
        );
        fetchEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  return (
    <div className="list-container">
      <header>
        <h1>Employee List</h1>
      </header>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.Id}>
              <td>{employee.Id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>${Number(employee.salary).toLocaleString()}</td>
              <td>
                <Link to={`/edit/${employee.Id}`}>
                  <EditIcon />
                </Link>
                <button onClick={() => deleteEmployee(employee.Id)}>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="actions">
        <Link to="/" className="add-btn">
          <AddIcon sx={{ verticalAlign: "middle", mr: 0.5 }} /> Add New Employee
        </Link>
      </div>
    </div>
  );
}

export default EmployeeList;