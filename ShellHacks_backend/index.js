import express from 'express';
import fs from 'fs';
import dashboardRouter from "./userDashbord.js";
import randomRouter from "./randTransactions.js";
import inputRouter from "./inputTransactions.js";

const app = express();
const PORT = 3000; // Choose any port you want

app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
    res.send('Backend Server Running!');
});

// Example route to read the JSON file
app.get('/data', (req, res) => {
    fs.readFile('userData.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading data' });
        }
        res.json(JSON.parse(data));
    });
});

app.use('/userDashbord', dashboardRouter);
app.use('/randTransactions', randomRouter);
app.use('/inputTransactions', inputRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
