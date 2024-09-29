import fs from 'fs';
// Function to read and parse JSON data
function getCat() {
    console.log('reading json data');
    fs.readFile('userData.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        } try{
            const userData = JSON.parse(data);

            const jsonCat = userData.spendingCategories;

            //console.log('data:', jsonCat);
            generateTransactions(jsonCat);
        } catch (jsonErr) {
            console.log('Error parsing JSON:', jsonErr);
        }
    });
}
// Function to generate transactions
function generateTransactions(categories) {
    const companies = ["Company A", "Company B", "Company C", "Company D", "Company E"];
    const transactions = []; // Array to hold the transactions

    categories.forEach(category => {
        const dividedAmount = (category.amount / 5).toFixed(2);
        console.log(`Category: ${category.category}, Full Amount: ${category.amount}, Divided Amount: ${dividedAmount}`);
        
        for (let i = 0; i < 5; i++) {
            const randomCost = (Math.random() * ((dividedAmount * 1.5) - 0.50) + 0.50).toFixed(2);
            const randomName = companies[Math.floor(Math.random() * companies.length)];
            console.log(`Transaction Cost: ${randomCost}, Transaction Category: ${category.category}, Transaction Name: ${randomName}`);

            // Create a transaction object
            const transaction = {
                name: randomName,
                category: category.category,
                cost: parseFloat(randomCost), // Convert to float for consistency
            };

            // Add the transaction to the array
            transactions.push(transaction);
        }
    });

    // Call saveData with the accumulated transactions
    saveData(transactions);
}

// Function to save data to JSON
function saveData(transactions) {
    // Read the existing data
    let existingData = {};
    if (fs.existsSync('userData.json')) {
        const data = fs.readFileSync('userData.json', 'utf8');
        existingData = JSON.parse(data);
    }

    // Initialize the transactions array if it doesn't exist
    if (!existingData.transactions) {
        existingData.transactions = [];
    }

    // Push new transactions into the existing transactions array
    existingData.transactions = transactions; // Spread the array into the existing one

    // Write the updated data back to the file
    fs.writeFileSync('userData.json', JSON.stringify(existingData, null, 2), 'utf8');
    console.log('New data saved.');
    console.log('');
}


// Main function
function main() {
    var data = getCat('userData.json');
    //console.log(data);

}

main();
