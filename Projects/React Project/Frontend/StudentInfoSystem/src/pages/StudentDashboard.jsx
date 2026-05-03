import { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {
    const [announcements, setAnnouncements] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetchAnnouncements();

        const ws = new WebSocket("ws://localhost:5000");

        ws.onmessage = (e) => {
            setAnnouncements(prev => [
                { message: e.data },
                ...prev
            ]);
        };

        return () => ws.close();
    }, []);

    const fetchAnnouncements = async () => {
        const res = await axios.get("http://localhost:5000/announcements");
        setAnnouncements(res.data);
    };

    return (
        <div className="container mt-4">
            <h3>Welcome {user?.name}</h3>

            <div className="card p-3">
                <h5>Announcements</h5>

                {announcements.map((a, i) => (
                    <div key={i} className="alert alert-info">
                        {a.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentDashboard;