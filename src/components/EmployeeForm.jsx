import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeForm.css";
import SaveIcon from "@mui/icons-material/Save";
import ListIcon from "@mui/icons-material/List";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    Id: "",
    name: "",
    department: "",
    salary: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://node-vercel-postgress-beige.vercel.app/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });
      if (response.ok) {
        alert("Employee saved successfully!");
        setEmployee({
          Id: "",
          name: "",
          department: "",
          salary: "",
        });
      } else {
        alert("Failed to save employee. Please try again.");
      }
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("An error occurred while saving the employee. Please try again.");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Employee Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          {/* input for the Id */}
          <div className="form-group">
            <label htmlFor="Id">Employee ID</label>
            <input
              type="text"
              id="Id"
              name="Id"
              value={employee.Id}
              onChange={handleChange}
            />
          </div>
          {/* input for emp name */}
          <div className="form-group">
            <label htmlFor="name">Employee Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={employee.name}
              onChange={handleChange}
            />
          </div>
          {/* input for department */}
          <div className="form-group">
            <label htmlFor="dept">Department</label>
            <input
              type="text"
              id="dept"
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
          </div>
          {/* input for salary */}
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
            />
          </div>
          {/* submit button */}
          <div className="button-group">
            <button type="submit" className="submit-btn">
              <SaveIcon sx={{ verticalAlign: "middle", mr: 0.5 }} /> Save
              Employee
            </button>
            <Link to="/emplist">
              <button type="button" className="view-btn">
                <ListIcon sx={{ verticalAlign: "middle", mr: 0.5 }} /> View
                Employees
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmployeeForm;