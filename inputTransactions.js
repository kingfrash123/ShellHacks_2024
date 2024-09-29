import fs from 'fs';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responses = {};

function getAccount(){
    rl.question("Enter the account where the purchase came from (1 or 2): ",(account) => {
        responses.account = account;
        console.log(account);
        //saveResponses();
        getCompanyName();
    });
}

function getCompanyName(){
    rl.question("Enter company name: ",(name) => {
        responses.name = name;
        console.log(name);
        //saveResponses();
        getCategory();
    });
}

function getCategory(){
    rl.question("Enter purchasing category: ",(category) => {
        responses.category = category;
        console.log(category);
        //saveResponses();
        getPrice();
    });
}

function getPrice(){
    rl.question("Enter price of item: ",(price) => {
        responses.cost = parseFloat(price);
        console.log(price);
        //saveResponses();
        rl.close();
        updateAccount();
    });
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

getAccount();