import inquirer from "inquirer";

//Exercise#1

console.log("                                                      ");
console.log("THE ATM MACHINE");

console.log("the account number is 123,  pin is 9999");

enum userData {
  pin = 9999,
  accountNumber = 123,
}

let balance: number = 1999;

let logsArry: any[] = [];

function balTrans(x: number) {
  let bal: number = balance - x;
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
      if (
        answers.accountNumber == userData.accountNumber &&
        answers.Pin == userData.pin
      ) {
        console.log("Login successful");
        atm();
      } else {
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
      } else if (answers.operation == "2. Withdraw money") {
        console.log(`we dont have money in the atm  `);
        withDraw();
      } else if (answers.operation == "3. Check transactions") {
        console.log(`Recent Transactions ${logsArry}`);
        CallAtm();
      } else if (answers.operation == "4. End transactions") {
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
        console.log(
          "Amount in Bank is Now ",
          balTrans(answers.AmountToWithDraw)
        );
        balance = balTrans(answers.AmountToWithDraw);
        logsArry.push(answers.AmountToWithDraw);
        CallAtm();
      } else if (answers.AmountToWithDraw > balance) {
        console.log(`Unable to Withdraw `);
        console.log(`Requested Amount is More then Balance`);
        console.log(`Balance is ${balance}$`);

        CallAtm();
      } else {
        console.log("Invalid amount");
        CallAtm();
      }
    });
}
console.log("                                                      ");
