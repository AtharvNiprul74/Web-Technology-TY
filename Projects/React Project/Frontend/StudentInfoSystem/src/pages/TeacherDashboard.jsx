import { useEffect, useState } from "react";
import axios from "axios";

function TeacherDashboard() {
    const [students, setStudents] = useState([]);

    const [form, setForm] = useState({
        name: "",
        username: "",
        password: ""
    });

    const [msg, setMsg] = useState("");
    const [announcements, setAnnouncements] = useState([]);
    const [socket, setSocket] = useState(null);

    const BASE = "http://localhost:5000";

    useEffect(() => {
        fetchStudents();

        const ws = new WebSocket("ws://localhost:5000");

        ws.onmessage = (e) => {
            setAnnouncements((prev) => [e.data, ...prev]);
        };

        setSocket(ws);

        return () => ws.close();
    }, []);

    const fetchStudents = async () => {
        const res = await axios.get(`${BASE}/students`);
        setStudents(res.data);
    };

    const handleAdd = async () => {
        if (!form.name || !form.username || !form.password) {
            alert("All fields required");
            return;
        }

        await axios.post(`${BASE}/add-student`, form);

        setForm({ name: "", username: "", password: "" });
        fetchStudents();
    };

    const handleDelete = async (id) => {
        await axios.delete(`${BASE}/students/${id}`);
        fetchStudents();
    };

    const sendAnnouncement = () => {
        if (!msg.trim()) return;

        socket.send(msg);
        setMsg("");
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-4">👨‍🏫 Teacher Dashboard</h2>

            <div className="row">

                <div className="col-md-5">

                    <div className="card p-3 mb-3">
                        <h5>Add Student</h5>

                        <input
                            className="form-control mb-2"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />

                        <input
                            className="form-control mb-2"
                            placeholder="Username"
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                        />

                        <input
                            className="form-control mb-2"
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />

                        <button className="btn btn-success" onClick={handleAdd}>
                            Add Student
                        </button>
                    </div>

                    <div className="card p-3">
                        <h5>Students</h5>

                        {students.map((s) => (
                            <div
                                key={s.id}
                                className="d-flex justify-content-between align-items-center border-bottom py-2"
                            >
                                <div>
                                    <strong>{s.name}</strong><br />
                                    <small>{s.username}</small>
                                </div>

                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(s.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="col-md-7">

                    <div className="card p-3 mb-3">
                        <h5>Send Announcement</h5>

                        <input
                            className="form-control mb-2"
                            placeholder="Type announcement..."
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        />

                        <button className="btn btn-primary" onClick={sendAnnouncement}>
                            Send
                        </button>
                    </div>

                    <div className="card p-3">
                        <h5>Live Announcements</h5>

                        {announcements.map((a, i) => (
                            <div key={i} className="alert alert-info py-2">
                                📢 {a}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default TeacherDashboard;