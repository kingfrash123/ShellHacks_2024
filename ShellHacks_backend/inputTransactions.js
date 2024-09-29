

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

router.post('/input', (req, res) => {
    const { account, company, category,price } = req.body;
    getAccount(account, company, category,price);

    res.status(201).json({ message: 'Setup complete'});
});


const responses = {};

function getAccount(account, company, category,price){
        responses.account = account;
        console.log(account);
        //saveResponses();
        getCompanyName(company, category,price);
}

function getCompanyName( company, category,price){
        responses.name = company;
        console.log(company);
        //saveResponses();
        getCategory(category,price);
}

function getCategory(category,price){
        responses.category = category;
        console.log(category);
        //saveResponses();
        getPrice(price);
}

function getPrice(price){
        responses.cost = parseFloat(price);
        console.log(price);
        //saveResponses();
        updateAccount();
}

function updateAccount() {
    console.log('');
    console.log('reading json data');
    fs.readFile('userData.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        try {
            const userData = JSON.parse(data);
            if (responses.account == 1) {
                userData.account1total -= responses.cost;
            } else if (responses.account == 2) {
                userData.account2total -= responses.cost;
            }
            userData.userTotal = userData.account1total + userData.account2total;

            console.log(`Updated userTotal: ${userData.userTotal}`);
            console.log(`Updated account${responses.account}total: ${responses.account == 1 ? userData.account1total : userData.account2total}`);

            saveResponses(userData);
        } catch (jsonErr) {
            console.log('Error parsing JSON:', jsonErr);
        }
    });
}




function saveResponses(userData) {
    if (!userData.transactions) {
        userData.transactions = [];
    }

    userData.transactions.push(responses);

    // Write the updated data back to the file
    fs.writeFileSync('userData.json', JSON.stringify(userData, null, 2), 'utf8');
    console.log('Response saved.');
    console.log('');
}

export default router;
