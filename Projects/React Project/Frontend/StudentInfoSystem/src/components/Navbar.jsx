import { Link } from "react-router-dom";

function Navbar({ role }) {
    const handleLogout = () => {
        localStorage.removeItem("user");
        setRole(null);
        navigate("/");
    };
    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <span className="navbar-brand">📚 Classroom</span>

            {role === "teacher" && (
                <Link className="btn btn-light" to="/teacher">Dashboard</Link>
            )}

            {role === "student" && (
                <Link className="btn btn-light" to="/student">Dashboard</Link>
            )}

            {role && (
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </nav>
    );
}

export default Navbar;