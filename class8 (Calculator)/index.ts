import inquirer, {
  Answers,
  QuestionAnswer,
  QuestionCollection,
} from "inquirer";

// Assignment for the week is:
// Assignment for the week is to develop CALCULTOR application which takes input from user via inquirer and perform
//  - Addition
//  - Subtraction
//  - Multiplication
//  - Modulus
//  - Division
//  - Exponent

//Exercise#1
{
  console.log("                                                      ");
  console.log("\x1b[32     \x1b[0m");

  async function calulation() {
    let cal = await inquirer
      .prompt([
        {
          type: "number",
          name: "number1",
          message: "Enter First Number",
        },
        {
          type: "number",
          name: "number2",
          message: "Enter Second Number",
        },
        {
          type: "list",
          name: "operation",
          message: "Which operation do you want",
          choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Modulus",
            "Divison",
            "Exponant",
          ],
        },
      ])
      .then((answers) => {
        if (answers.operation == "Addition") {
          console.log(
            `${answers.number1} + ${answers.number2} = ${
              answers.number1 + answers.number2
            } `
          );
        } else if (answers.operation == "Subtraction") {
          let resultSub = answers.number1 - answers.number2;
          console.log(
            `${answers.number1} - ${answers.number2} = ${resultSub} `
          );
        } else if (answers.operation == "Multiplication") {
          let resultMul = answers.number1 * answers.number2;
          console.log(
            `${answers.number1} * ${answers.number2} = ${resultMul} `
          );
        } else if (answers.operation == "Divison") {
          let resultDiv = answers.number1 / answers.number2;
          console.log(
            `${answers.number1} / ${answers.number2} = ${resultDiv} `
          );
        } else if (answers.operation == "Modulus") {
          let resultMod = answers.number1 % answers.number2;
          console.log(
            `${answers.number1} % ${answers.number2} = ${resultMod} `
          );
        } else if (answers.operation == "Exponant") {
          const result = Math.pow(answers.number1, answers.number2);
          console.log(
            `${answers.number1} raised to the power of ${answers.number2} is ${result}`
          );
        }
      });
  }

  calulation();

  // const answer: Answers = await inquirer.prompt([
  //   {
  //     type: "number",
  //     name: "Score",
  //     message: "Enter Your Marks Between 0 to 100",
  //   },
  // ]);
  // if (answer.Score >= 100 || answer.Score <= 0) {
  //   console.log("Please Enter a Valid Number");
  // }
  // if (answer.Score <= 30) {
  //   console.log("Student failed");
  // } else {
  //   console.log("You Are Pass");
  // }

  console.log("                                                      ");
}
