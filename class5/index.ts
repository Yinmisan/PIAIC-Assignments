// Assignment for the week is:

// Exercise 1: - Create a function that takes an array, an index, and a value as parameters.
//               Inside the function, use the splice method to insert the value at the specified index in the array.
//               Return the modified array.

// Exercise 2:  - Implement a simple shopping cart program using an array.
//                Create functions to add items, remove items, and update quantities using the splice method.
//                Print the cart's contents after each operation

// Exercise 3:  - Write a program that uses a while loop to print the first 25 integers.

// Exercise 4:  - Write a program that uses a while loop to print the first 10 even numbers.

// Exercise 5: - Create a function that takes a positive integer as parameter.
//               and uses a while loop to calculate and return the factorial of that number.

// Exercise 6: - Write a program having an array of numbers.
//               if the number is negative it should remove the negative number from the array.

// Exercise 7: - Create a function that takes an array of numbers as parameter.
//               Use a while loop to calculate and return the sum of all the numbers in the array.

//Exercise 8: - Implement a program that takes a list of temperatures in Celsius as input from the user.
//               Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.
//                Use a while loop to perform the conversion for each temperature.

//Exercise#1
{
  console.log("                                                      ");
  console.log(
    "\x1b[32mExercise #1 Create a function that takes an array, an index, and a value as parameters.\x1b[0m"
  );
  console.log(
    "\x1b[32m             Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.\x1b[0m"
  );
  console.log("                                                      ");

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function callN(arr: any, index: number, value: number) {
    arr.splice(index, 0, value);
    return arr;
  }
  console.log(callN(arr, 0, 0));

  console.log("                                                      ");
}
//Exercise #2
{
  console.log(
    "\x1b[32mExercise 2:  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation\x1b[0m"
  );
  console.log("                                                      ");

  let shoppingCart = ["onion", "potato", "carrot"];

  function splice(stateOfItem: any, itemName: any) {
    if (stateOfItem == "add") {
      console.log(`added ${itemName}`);
      var itemIndexOf: number = shoppingCart.length;
      shoppingCart.splice(itemIndexOf, 0, itemName);
    } else if (stateOfItem == "delete") {
      var itemIndexOf: number = shoppingCart.indexOf(itemName);
      console.log(`deleted ${itemName}`);
      shoppingCart.splice(itemIndexOf, 1);
    } else if (stateOfItem == "index") {
      var itemIndexOf: number = shoppingCart.indexOf(itemName);
      console.log(`Index of ${itemName} is at ${itemIndexOf}`);
    } else if (stateOfItem == "total" && itemName == "total") {
      console.log(`Length of list is ${shoppingCart.length}`);
    }

    return shoppingCart;
  }

  console.log(splice("add", "milk"));

  console.log(splice("delete", "carrot"));

  console.log(splice("add", "tea"));

  console.log(splice("index", "onion"));

  console.log(splice("total", "total"));

  console.log("                                                      ");
}
//Exercise #3
{
  console.log(
    "\x1b[32mExercise 3:  - Write a program that uses a while loop to print the first 25 integers.\x1b[0m"
  );
  console.log("                                                      ");
  function logFirst25Integers() {
    let i = 1;
    while (i <= 25) {
      console.log(i);
      i++;
    }
  }

  logFirst25Integers();
  console.log("                                                      ");
}
//Exercise#4
{
  console.log("                                                      ");
  console.log(
    "\x1b[32mExercise 4:  - Write a program that uses a while loop to print the first 10 even numbers.\x1b[0m"
  );
  console.log("                                                      ");

  function logFirst10EvenNumbers() {
    let i = 2;
    while (i <= 20) {
      console.log(i);
      i += 2;
    }
  }

  logFirst10EvenNumbers();

  console.log("                                                      ");
}
//Exercise #5
{
  console.log(
    "\x1b[32mExercise 5: - Create a function that takes a positive integer as parameter. and uses a while loop to calculate and return the factorial of that number.\x1b[0m"
  );
  console.log("                                                      ");

  function factorial(n: number) {
    let result = 1;
    while (n > 1) {
      result *= n;
      n--;
    }
    return result;
  }

  console.log(factorial(5)); // 120

  console.log("                                                      ");
}
//Exercise #6
{
  console.log(
    "\x1b[32mExercise 6: - Write a program having an array of numbers. if the number is negative it should remove the negative number from the array.\x1b[0m"
  );
  console.log("                                                      ");

  let numbers = [1, 2, 3, 4, -5, 6, -7, 8, 9, 0];
  numbers = numbers.filter((number) => number >= 0);
  console.log(numbers);

  console.log("                                                      ");
}

//Exercise #7
{
  console.log(
    "\x1b[32mExercise 7: - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.\x1b[0m"
  );
  console.log("                                                      ");

  let addTheseUp = [6, 2, 8, 4, 45, 2562, 24532, 4355, 5232, 7];

  function sum(num: any) {
    let i = 0;
    let arraySum = 0;
    while (i < num.length) {
      arraySum += num[i];
      i++;
    }
    return arraySum;
  }
  console.log(sum(addTheseUp));

  console.log("                                                      ");
}
//Exercise #8
{
  console.log(
    "\x1b[32mExercise 8: - Implement a program that takes a list of temperatures in Celsius as input from the user.Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.Use a while loop to perform the conversion for each temperature.\x1b[0m"
  );
  console.log("                                                      ");

  let listOfTempInC = [6, 2, 8, 4, 45, 2562, 24532, 4355, 5232, 7];

  function tempConverterInF(list: any) {
    let i = 0;
    let converted = [];
    while (i < list.length) {
      converted[i] = (list[i] * 9) / 5 + 32;
      i++;
    }

    return converted;
  }
  console.log(tempConverterInF(listOfTempInC));

  console.log("                                                      ");
}
