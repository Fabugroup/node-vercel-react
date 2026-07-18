import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    backgroundColor: "#2c3e50",
    color: "white",
    marginBottom: "2rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <h1>My Company</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/" style={linkStyle}>
          <HomeIcon sx={{ mr: 0.5 }} /> HOME
        </Link>
        <Link to="/emplist" style={linkStyle}>
          <ListIcon sx={{ mr: 0.5 }} /> VIEW
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;