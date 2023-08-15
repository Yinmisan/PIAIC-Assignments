//Exercise#1
{
  console.log("                                                      ");
  console.log(
    "\x1b[32mExercise #1 Print a message like Hey Abu Hurairah, I have started learning TYPESCRIPT.\x1b[0m"
  );
  console.log("                                                      ");

  console.log("iv started typescript");

  console.log("                                                      ");
}
//Exercise #2
{
  console.log(
    "\x1b[32mExercise #2 Store your name in a variable and print it.\x1b[0m"
  );
  console.log("                                                      ");

  let storedName: string = "Casio";
  console.log(`Hello ${storedName}`);

  console.log("                                                      ");
}
//Exercise #3
{
  console.log(
    "\x1b[32mExercise #3 Store 10 numbers in different variables. Add all of them and print the SUM\x1b[0m"
  );
  console.log("\x1b[32mAdd all of them and print the SUM.\x1b[0m");
  console.log("\x1b[32mPrint the Difference (subtraction).\x1b[0m");
  console.log("\x1b[32mPrint the result after multiplying all. \x1b[0m");
  console.log(
    "\x1b[32mTake two numbers and print the division result. \x1b[0m"
  );

  console.log("                                                      ");

  var one: number = 1;
  var two: number = 2;
  var three: number = 3;
  var four: number = 4;
  var five: number = 5;
  var six: number = 6;
  var seven: number = 7;
  var eight: number = 8;
  var nine: number = 9;
  var ten: number = 10;
  console.log(
    `${one},${two},${three},${four},${five},${six},${seven},${eight},${nine},${ten}`
  );

  console.log("                                                      ");
  //Add all of them and print the SUM
  console.log(
    "sum of all those number is",
    one + two + three + four + five + six + seven + eight + nine + ten
  );
  console.log("                                                      ");
  //Print the Difference (subtraction).
  console.log(`${ten} minus ${nine} =`, ten - nine);
  console.log("                                                      ");
  //Print the result after multiplying all.
  console.log(
    "multiplying of all those number is",
    one * two * three * four * five * six * seven * eight * nine * ten
  );
  console.log("                                                      ");
  //Take two numbers and print the division result.
  console.log(`${four} divide ${two} =`, four / two);
  console.log("                                                      ");

  console.log(
    "\x1b[32m Now, perform all four operations with the given numbers, \x1b[0m"
  );
  console.log(
    "\x1b[32m print the results,observe the order in which the operations take place.\x1b[0m"
  );
}
