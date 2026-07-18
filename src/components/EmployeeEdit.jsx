import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./EmployeeEdit.css";

function EmployeeEdit() {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empId: "",
    name: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    fetch(`https://node-vercel-postgress-beige.vercel.app/employees/${empId}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data));
  }, [empId]);

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
      const response = await fetch(`https://node-vercel-postgress-beige.vercel.app/employees/${empId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      const result = await response.json();
      console.log(result);
      navigate("/emplist");
    } catch {
      console.log("Update Error :");
    }
  };

  return (
    <div className="form-container">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="empId">Employee ID</label>
          <input
            type="text"
            id="empId"
            name="empId"
            value={employee.empId}
            readOnly
          />
        </div>

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

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Update Employee
          </button>
          <Link to="/emplist">
            <button type="button" className="view-btn">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EmployeeEdit;