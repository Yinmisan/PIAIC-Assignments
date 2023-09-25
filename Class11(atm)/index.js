import inquirer from "inquirer";
//Exercise#1
console.log("                                                      ");
console.log("THE ATM MACHINE");
console.log("the account number is 123,  pin is 9999");
var userData;
(function (userData) {
    userData[userData["pin"] = 9999] = "pin";
    userData[userData["accountNumber"] = 123] = "accountNumber";
})(userData || (userData = {}));
let balance = 1999;
let logsArry = [];
function balTrans(x) {
    let bal = balance - x;
    return bal;
}
function CallLogin() {
    login();
}
async function login() {
    let Login = inquirer
        .prompt([
        {
            type: "number",
            name: "accountNumber",
            message: "Enter Account Number",
        },
        {
            type: "number",
            name: "Pin",
            message: "Enter The 4 Digit Pin Code",
        },
    ])
        .then((answers) => {
        if (answers.accountNumber == userData.accountNumber &&
            answers.Pin == userData.pin) {
            console.log("Login successful");
            atm();
        }
        else {
            console.log("Invalid account number or PIN");
            CallLogin();
        }
    });
}
login();
function CallAtm() {
    atm();
}
async function atm() {
    let atm = inquirer
        .prompt([
        {
            type: "list",
            name: "operation",
            message: "Choose an option:",
            choices: [
                "1. Check balance",
                "2. Withdraw money",
                "3. Check transactions",
                "4. End transactions",
            ],
        },
    ])
        .then((answers) => {
        if (answers.operation == "1. Check balance") {
            console.log("Your balance is");
            console.log(balance);
            CallAtm();
        }
        else if (answers.operation == "2. Withdraw money") {
            console.log(`we dont have money in the atm  `);
            withDraw();
        }
        else if (answers.operation == "3. Check transactions") {
            console.log(`Recent Transactions ${logsArry}`);
            CallAtm();
        }
        else if (answers.operation == "4. End transactions") {
            console.log("All transactions Ended");
            console.log("Logged Out");
        }
    });
}
async function withDraw() {
    let withdraw = inquirer
        .prompt([
        {
            type: "number",
            name: "AmountToWithDraw",
            message: "Enter amount you want to Withdraw",
        },
    ])
        .then((answers) => {
        if (answers.AmountToWithDraw < balance) {
            console.log(`${answers.AmountToWithDraw} has been Withdraw`);
            console.log("Amount in Bank is Now ", balTrans(answers.AmountToWithDraw));
            balance = balTrans(answers.AmountToWithDraw);
            logsArry.push(answers.AmountToWithDraw);
            CallAtm();
        }
        else if (answers.AmountToWithDraw > balance) {
            console.log(`Unable to Withdraw `);
            console.log(`Requested Amount is More then Balance`);
            console.log(`Balance is ${balance}$`);
            CallAtm();
        }
        else {
            console.log("Invalid amount");
            CallAtm();
        }
    });
}
console.log("                                                      ");
//         if (accountNumber === this.accountNumber && pin === this.pin) {
//             console.log("Login successful");
//             return true;
//         } else {
//             console.log("Invalid account number or PIN");
//             return false;
//         }
//     }
//       {
//         type: "list",
//         name: "operation",
//         message: "Choose an option:",
//         choices: [
//           "1. Check balance",
//           "2. Withdraw money",
//           "3. Check transactions",
//           "4. End transactions",
//         ],
//       },
//     ])
//     .then((answers) => {
//       if (answers.operation == "Addition") {
//         console.log(
//           `${answers.number1} + ${answers.number2} = ${
//             answers.number1 + answers.number2
//           } `
//         );
//       } else if (answers.operation == "Subtraction") {
//         let resultSub = answers.number1 - answers.number2;
//         console.log(
//           `${answers.number1} - ${answers.number2} = ${resultSub} `
//         );
//       } else if (answers.operation == "Multiplication") {
//         let resultMul = answers.number1 * answers.number2;
//         console.log(
//           `${answers.number1} * ${answers.number2} = ${resultMul} `
//         );
//       } else if (answers.operation == "Divison") {
//         let resultDiv = answers.number1 / answers.number2;
//         console.log(
//           `${answers.number1} / ${answers.number2} = ${resultDiv} `
//         );
//       } else if (answers.operation == "Modulus") {
//         let resultMod = answers.number1 % answers.number2;
//         console.log(
//           `${answers.number1} % ${answers.number2} = ${resultMod} `
//         );
//       } else if (answers.operation == "Exponant") {
//         const result = Math.pow(answers.number1, answers.number2);
//         console.log(
//           `${answers.number1} raised to the power of ${answers.number2} is ${result}`
//         );
//       }
//     });
// }
// {
// class ATM {
//     private accountNumber: string;
//     private pin: string;
//     private balance: number;
//     private transactions: string[];
//     constructor(accountNumber: string, pin: string, balance: number) {
//         this.accountNumber = accountNumber;
//         this.pin = pin;
//         this.balance = balance;
//         this.transactions = [];
//     }
//     login(accountNumber: string, pin: string): boolean {
//         if (accountNumber === this.accountNumber && pin === this.pin) {
//             console.log("Login successful");
//             return true;
//         } else {
//             console.log("Invalid account number or PIN");
//             return false;
//         }
//     }
//     checkBalance(): void {
//         console.log(`Your current balance is: ${this.balance}`);
//     }
//     withdrawMoney(amount: number): void {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//             this.transactions.push(`Withdrew: ${amount}`);
//             console.log(`Withdrew: ${amount}`);
//         } else {
//             console.log("Insufficient balance");
//         }
//     }
//     checkTransactions(): void {
//         console.log("Previous transactions:");
//         this.transactions.forEach((transaction, index) => {
//             console.log(`${index + 1}. ${transaction}`);
//         });
//     }
//     performTransactions(): void {
//         while (true) {
//             console.log("Choose an option:");
//             console.log("1. Check balance");
//             console.log("2. Withdraw money");
//             console.log("3. Check transactions");
//             console.log("4. End transactions");
//             const option = parseInt(prompt("Enter the option number:"));
//             switch (option) {
//                 case 1:
//                     this.checkBalance();
//                     break;
//                 case 2:
//                     const withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
//                     this.withdrawMoney(withdrawAmount)
//             }
//
