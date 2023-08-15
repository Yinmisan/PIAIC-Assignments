"use strict";
// Exercise 1:  Write a program that calculates the area of a rectangle.
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
// Exercise 4:   Write a program that checks if a given number is even or odd.
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
//Exercise#1
{
    console.log("                                                      ");
    console.log("\x1b[32mExercise #1 Write a program that calculates the area of a rectangle.\x1b[0m");
    console.log("                                                      ");
    var length = 6;
    var width = 7;
    var areaOfRectangle = length * width;
    console.log(`${areaOfRectangle}`);
    console.log("                                                      ");
}
//Exercise #2
{
    console.log("\x1b[32mExercise #2 Write a program that takes input and calculates the volume of a cube.\x1b[0m");
    console.log("                                                      ");
    var cube = 4;
    var volumeCube = cube ** 3;
    console.log(`The Volume is ${volumeCube}`);
    console.log("                                                      ");
}
//Exercise #3
{
    console.log("\x1b[32mExercise #3 Write a program that checks if a given number is positive, negative, or zero.\x1b[0m");
    console.log("                                                      ");
    var givenNumb = 5;
    if (givenNumb == 0) {
        console.log("Zero");
    }
    else if (givenNumb > 0) {
        console.log(`${givenNumb} is positive Number`);
    }
    else {
        console.log(`${givenNumb} is negative Number`);
    }
    console.log("                                                      ");
}
//Exercise#4
{
    console.log("                                                      ");
    console.log("\x1b[32mExercise #4 Write a program that checks if a given number is even or odd.      \x1b[0m");
    console.log("                                                      ");
    var EvenOrOdd = 5;
    if (EvenOrOdd % 2 == 0) {
        console.log(`${EvenOrOdd} Number is Even`);
    }
    else {
        console.log(`${EvenOrOdd} Number is Odd`);
    }
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32mExercise #5 Write a program that determines if a person is eligible to vote based on their age.\x1b[0m");
    console.log("                                                      ");
    var userAge = 18;
    if (userAge >= 18 && userAge <= 150) {
        console.log(`Your age ${userAge} is eligible to vote`);
    }
    else {
        console.log("You are not eligible for voting");
    }
    console.log("                                                      ");
}
//Exercise #6
{
    console.log("\x1b[32mExercise #6 Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)\x1b[0m");
    console.log("                                                      ");
    var x = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
    console.log(`((10 + 5) * 3 - 2) / (4 % 3)  - 7) the Result is ${x}`);
    console.log("                                                      ");
}
