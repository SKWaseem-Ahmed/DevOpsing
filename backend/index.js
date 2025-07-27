const express = require("express");
const cors = require("cors");
const app = express();
console.log("Starting backend app...");

app.use(cors());
console.log("Starting backend app......");

app.get("/", (req, res) => {
    res.send("DevOpsTube backend is running");
});

app.get("/api/videos", (req, res) => {
    res.json([
        { id: 1, title: "Intro to DevOps", url: "https://youtu.be/dQw4w9WgXcQ" },
        { id: 2, title: "CI/CD Explained", url: "https://youtu.be/scEDHsr3APg?si=kO9C3mMMRfYjW7NK" },
        { id: 3, title: "DevSecOps Explained", url: "https://www.youtube.com/watch?v=atWfA2TW0K0" },
        { id: 4, title: "Mastering DevOps", url: "https://www.youtube.com/watch?v=PfjVXb-YXbQ" },
        { id: 5, title: "Mastering DevOps", url: "https://www.youtube.com/watch?v=ySlMUYTBnv0" },
    ]);
});

const PORT = 5151;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend API running on http://localhost:${PORT}`);
});
