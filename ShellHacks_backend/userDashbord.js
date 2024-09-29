import express from 'express';
import fs from 'fs';

const router = express.Router();
const DATA_FILE = 'userData.json'; // Adjust the path if needed

// Middleware to read and parse the JSON data
const readData = () => {
    if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    }
    return {};
};

// POST /userDashboard/setup - Setup user data
router.post('/setup', (req, res) => {
    const { name, password } = req.body;

    // Read existing data
    const existingData = readData();

    // Update or set user data
    const responses = {
        ...existingData, // Retain existing data
        name,
        password
    };

    // Save the updated responses to JSON
    fs.writeFileSync(DATA_FILE, JSON.stringify(responses, null, 2), 'utf8');
    res.status(201).json({ message: 'Setup complete', data: responses });
});

// POST /userDashboard/accounts - Setup or update account data
router.post('/accounts', (req, res) => {
    const { account1, account1total, account2, account2total } = req.body;

    // Read existing data
    const existingData = readData();

    // Update or set account data
    const responses = {
        ...existingData, // Retain existing data
        account1,
        account1total: parseFloat(account1total),
        account2,
        account2total: parseFloat(account2total),
        userTotal: parseFloat((account1total + account2total).toFixed(2)),
        spendingCategories: existingData.spendingCategories || [] // Preserve existing categories
    };

    // Save the updated responses to JSON
    fs.writeFileSync(DATA_FILE, JSON.stringify(responses, null, 2), 'utf8');
    res.status(201).json({ message: 'Accounts updated', data: responses });
});

// POST /userDashboard/categories - Create a new spending category
router.post('/categories', (req, res) => {
    const { category, amount } = req.body;
    const data = readData();

    // Ensure spendingCategories is an array
    if (!data.spendingCategories) {
        data.spendingCategories = [];
    }
    
    // Add new category
    data.spendingCategories.push({ category, amount: parseFloat(amount) });
    
    // Save updated data back to JSON
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    res.status(201).json({ message: 'Category created!', category });
});

// GET /userDashboard/data - Retrieve all user data
router.get('/data', (req, res) => {
    const data = readData();
    res.json(data);
});

export default router;
