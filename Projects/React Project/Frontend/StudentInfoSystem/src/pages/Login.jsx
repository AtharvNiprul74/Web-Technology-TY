import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/login", {
                username,
                password
            });

            localStorage.setItem("user", JSON.stringify(res.data));

            if (res.data.role === "teacher") navigate("/teacher");
            else navigate("/student");

        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="container mt-5 col-md-4">
            <div className="card p-4">
                <h3>Login</h3>

                <input
                    className="form-control mb-2"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;