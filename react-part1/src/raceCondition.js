let account = { balance: 100 };

function withdraw(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (account.balance >= amount) {
                account.balance -= amount;
                resolve(`Withdrawn: $${amount}, Remaining: $${account.balance}`);
            } else {
                reject("Insufficient funds");
            }
        }, Math.random() * 10); // network delay
    });
}

// Two simultaneous withdrawals
withdraw(80).then(console.log).catch(console.log);
withdraw(50).then(console.log).catch(console.log);
