


import fs from 'fs';


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responses = {};

var name = "temp";
var  account1 ="temp";
var  account1total = 0;
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
    rl.question("Enter the ammount of money in first account: ", (account1total) => {
        responses.account1total = parseFloat(account1total);
        saveResponses();
        rl.close();
        readBack();
    })
}

function saveResponses() {
    fs.writeFileSync('userData.json', JSON.stringify(responses, null, 2), 'utf8');
    console.log('Response saved.');
    
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

            console.log('Name:', jsonName);
            console.log('Account1:', jsonAccount1);
            console.log('Total:', jsonAccount1total);

        } catch (jsonErr) {
            console.log('Error parsing JSON:', jsonErr);
        }
    });
}

function createCatagories(){
    
    console.log

    {catagories: 'food'}

}


