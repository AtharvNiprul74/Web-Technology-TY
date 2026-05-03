const express = require("express");
const mysql = require("mysql2");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "classroom"
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if (err) return res.status(500).send(err);

            if (result.length === 0) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const user = result[0];

            res.json({
                id: user.id,
                name: user.name,
                role: user.role
            });
        }
    );
});

app.post("/add-student", (req, res) => {
    const { name, username, password } = req.body;

    db.query(
        "INSERT INTO users (name, role, username, password) VALUES (?, 'student', ?, ?)",
        [name, username, password],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send("Student added");
        }
    );
});

app.get("/students", (req, res) => {
    db.query(
        "SELECT id, name, username FROM users WHERE role = 'student'",
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json(result);
        }
    );
});

app.delete("/students/:id", (req, res) => {
    db.query(
        "DELETE FROM users WHERE id = ? AND role = 'student'",
        [req.params.id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send("Student deleted");
        }
    );
});

app.get("/announcements", (req, res) => {
    db.query("SELECT * FROM announcements ORDER BY created_at DESC", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

const server = app.listen(5000, () => {
    console.log("Server running on port 5000");
});

// WebSocket
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on("connection", (ws) => {
    clients.push(ws);

    ws.on("message", (message) => {

        db.query("INSERT INTO announcements (message) VALUES (?)", [message]);

        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", () => {
        clients = clients.filter(c => c !== ws);
    });
});