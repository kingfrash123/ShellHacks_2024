


import fs from 'fs';


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responses = {};

var name = "temp";
var  account1 ="temp";
var  accountTotal1 = 0;
var account2total = 0;
console.log(name);

function getName() {
    rl.question("Enter name: ", (name) => {
        responses.name = name;
        console.log(name);
        saveResponses();
        getAccount1();

    })
}

function getAccount1() {
    rl.question("Enter name of first Account: ", (account1) => {
        responses.account1 = account1;
        saveResponses();
        getAccount1Total();
    })
}

function getAccount1Total() {
    rl.question("Enter the ammount of money in first account: ", (accountTotal1) => {
        //globalAccount1Total = account1total;
        responses.account1total = parseFloat(accountTotal1);
        saveResponses();
        getAccount2();     
    })
}

function getAccount2() {
    rl.question("Enter name of second Account: ", (account2) => {
        responses.account2 = account2;
        saveResponses();
        getAccountTotal2();
    })
}

function getAccountTotal2() {
    rl.question("Enter the ammount of money in second account: ", (accountTotal2) => {
        responses.account2total = parseFloat(accountTotal2);
        responses.userTotal = responses.account1total + responses.account2total;
        saveResponses();
        createCategories();     
    })
}


function saveResponses() {
    // Read the existing data
    let existingData = {};
    if (fs.existsSync('userData.json')) {
        const data = fs.readFileSync('userData.json', 'utf8');
        existingData = JSON.parse(data);
    }

    // Merge new responses with existing data
    const updatedData = { ...existingData, ...responses };

    // Write the updated data back to the file
    fs.writeFileSync('userData.json', JSON.stringify(updatedData, null, 2), 'utf8');
    console.log('Response saved.');
    console.log('');
}
getName();

function readBack(){
    console.log('Setup complete');
    console.log('');
    console.log('reading json data');
    fs.readFile('userData.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        try{
            
            const userData = JSON.parse(data);

            const jsonName = userData.name;
            const jsonAccount1 = userData.account1;
            const jsonAccount1total = userData.account1total;
            const jsonAccount2 = userData.account2;
            const jsonAccount2total = userData.account2total;
            const jsonFundTotal = userData.userTotal;

            console.log('Name:', jsonName);
            console.log('Account 1 Name:', jsonAccount1);
            console.log('Account 1 Total:', jsonAccount1total);
            console.log('Account 2 Name:', jsonAccount2);
            console.log('Account 2 Total:', jsonAccount2total);
            console.log('Total Funds:', jsonFundTotal);

            if (userData.spendingCategories) {
                console.log('Spending Categories for the month:');
                userData.spendingCategories.forEach((category, index) => {
                    //console.log(`${index + 1}. ${category.category}: ${category.amount}`);
                    console.log(`${category.category}: ${category.amount}`);
                });
            }

        } catch (jsonErr) {
            console.log('Error parsing JSON:', jsonErr);
        }
    });
}

function createCategories(){
    
    rl.question("Create new purchase category (enter 'n' to stop): ", (cat) => {
        if(cat === 'n') {
            rl.close();
            readBack();
        } else{
            rl.question("Enter amount for " + cat + ":", (amount) => {
                if (!responses.spendingCategories) {
                    responses.spendingCategories = [];
                }
                responses.spendingCategories.push({ category: cat, amount: parseFloat(amount) });
                saveResponses();
                createCategories();
            });
        }
    });
}


