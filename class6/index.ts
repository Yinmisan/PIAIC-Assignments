// Assignment for the week is:

// Exercise 1: - Develop a program that calculates and prints the sum of the first number even numbers using a for loop.

// Exercise 2: - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

// Exercise 3:  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

// Exercise 4: - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

// Exercise 5: - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

// Exercise 6: - Write a program that uses a function to find the largest element in an array of numbers.

//Exercise#1
{
  console.log("                                                      ");
  console.log(
    "\x1b[32mExercise 1: - Develop a program that calculates and prints the sum of the any first number even numbers using a for loop.\x1b[0m"
  );
  console.log("                                                      ");

  let sum = 0;

  let array: any = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      sum += i;
      array.push(i);
    }
  }

  console.log(
    `${sum} is the sum of ${array.length} Even numbers in this Array`
  );
  console.log(array);

  console.log("                                                      ");
}
//Exercise #2
{
  console.log(
    "\x1b[32mExercise 2: - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.\x1b[0m"
  );
  console.log("                                                      ");

  let numbers: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenNumb: any = [];

  function evenSorter(numb: any = []) {
    for (let i = 0; i <= numb.length; i++) {
      if (numb.at(i) % 2 == 0) {
        evenNumb.push(numb.at(i));
      }
    }
    return evenNumb;
  }

  console.log(numbers);

  console.log(evenSorter(numbers));

  console.log("                                                      ");
}
//Exercise #3
{
  console.log(
    "\x1b[32mExercise 3: - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones\x1b[0m"
  );
  console.log("                                                      ");

  let numbers: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let oddNumb: any = [];

  function oddSorter(numb: any = []) {
    for (let i = 0; i <= numb.length; i++) {
      if (numb.at(i) % 2 !== 0) {
        oddNumb.push(numb.at(i));
      }
    }
    return oddNumb;
  }

  console.log(numbers);

  console.log(oddSorter(numbers));

  console.log("                                                      ");
}
//Exercise#4
{
  console.log("                                                      ");
  console.log(
    "\x1b[32mExercise 4: - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.\x1b[0m"
  );
  console.log("                                                      ");

  function AreaCircle(r: number) {
    let areaCircle = 3.141592654 * Number(r) * Number(r);
    return areaCircle;
  }
  console.log(AreaCircle(9));

  console.log("                                                      ");
}
//Exercise #5
{
  console.log(
    "\x1b[32mExercise 5: - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.\x1b[0m"
  );
  console.log("                                                      ");

  let numbers: any = [
    100, 200, 300, 400, 500, 60, 70, 80, 90, 10, 25, 9, 51, 50,
  ];

  let pass: any = [];

  function passfilter(numb: any = []) {
    for (let i = 0; i <= numb.length; i++) {
      if (numb.at(i) >= 50) {
        pass.splice(1, 0, numb.at(i));
      }
    }
    return pass;
  }

  console.log(passfilter(numbers));

  console.log("                                                      ");
}
//Exercise #6
{
  console.log(
    "\x1b[32mExercise 6: - Write a program that uses a function to find the largest element in an array of numbers.\x1b[0m"
  );
  console.log("                                                      ");

  let numbers: any = [1, 2, 3, 90, 5, 6, 7, 8, 9, 10, 11, 6, 6, 11, 90, 90];

  function topElement(numb: any = []) {
    var n1: number = 0;
    for (let i = 0; i <= numb.length; i++) {
      if (numb.at(i) >= n1) {
        n1 = numb.at(i);
      }
    }
    return n1;
  }
  console.log(topElement(numbers));

  console.log("                                                      ");
}
