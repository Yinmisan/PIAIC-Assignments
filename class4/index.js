"use strict";
//Exercise#1
{
    console.log("                                                      ");
    console.log("\x1b[32mExercise #1 Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.\x1b[0m");
    console.log("                                                      ");
    var celsius = 39;
    var fahrenheit = (celsius * 9) / 5 + 32;
    console.log(`${celsius} "°C is equal to"${fahrenheit}°F`);
    fahrenheit = 86;
    celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`${fahrenheit} "°F is equal to"${celsius}°C`);
    console.log("                                                      ");
}
//Exercise #2
{
    console.log("\x1b[32mExercise #2 Write a program that calculates the percentage.\x1b[0m");
    console.log("                                                      ");
    var percent = 39;
    var totalPercentFrom = 600;
    var percentage = (percent / totalPercentFrom) * 100;
    console.log(`The Number ${percent} is ${percentage}% of ${totalPercentFrom}`);
    console.log("                                                      ");
}
//Exercise #3
{
    console.log("\x1b[32mExercise #3 Write a program that converts given number of days in to weeks and days\x1b[0m");
    console.log("                                                      ");
    var numOfDays = 19;
    var Weeks = Math.floor(numOfDays / 7);
    var Day = numOfDays % 7;
    console.log(`${numOfDays} days convert to ${Weeks} weeks and ${Day} days`);
    console.log("                                                      ");
}
//Exercise #4
{
    console.log("\x1b[32mExercise #4 Write a program that calculates the discount for a product based on its price\x1b[0m");
    console.log("                                                      ");
    var discountPercent = 0.1;
    var price = 45214;
    var finalPrice = price - price * discountPercent;
    console.log(`You can buy this product which costs ${price} Rupees with ${discountPercent * 100}% off Discount  Your new Price is: ${finalPrice} Rupees only`);
    console.log("                                                      ");
}
// Exercise #5
{
    console.log("\x1b[32mExercise #5 Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print Child. If it's between 13 and 19, print Teenager. Otherwise, print Adult.\x1b[0m");
    console.log("                                                      ");
    var userAge = 17;
    if (userAge >= 1 && userAge <= 10) {
        console.log(`Your age ${userAge} makes you a child`);
    }
    else if (userAge >= 11 && userAge <= 19) {
        console.log(`Your age ${userAge} makes you a Teenager`);
    }
    else {
        console.log(`Your age ${userAge} makes you a adult`);
    }
    console.log("                                                      ");
}
// Exercise #6
{
    console.log("\x1b[32mExercise #6 Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.\x1b[0m");
    console.log("                                                      ");
    var LocalTemp = 13;
    if (LocalTemp > 40 && LocalTemp < 50) {
        console.log(`Thats UnBearable. Its ${LocalTemp}°C outside`);
    }
    else if (LocalTemp > 28 && LocalTemp < 39) {
        console.log(`Thats Hot. Its ${LocalTemp}°C outside`);
    }
    else if (LocalTemp > 20 && LocalTemp < 27) {
        console.log(`Thats Nice. Its ${LocalTemp}°C outside`);
    }
    else if (LocalTemp > 12 && LocalTemp < 19) {
        console.log(`Thats Cold. Its ${LocalTemp}°C outside`);
    }
    else {
        console.log(`Thats Extremely Cold. Its ${LocalTemp}°C outside`);
    }
    console.log("                                                      ");
}
// Exercise #7
{
    console.log("\x1b[32m Exercise # 7 Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.\x1b[0m");
    console.log("                                                      ");
    var sumNumber = 15;
    if (sumNumber)
        if (sumNumber % 3 == 0 && sumNumber % 5 == 0) {
            console.log(`${sumNumber} is Divisible by 3 and 5`);
        }
        else if (sumNumber % 3 == 0) {
            console.log(`${sumNumber} is Divisible by 3`);
        }
        else if (sumNumber % 5 == 0) {
            console.log(`${sumNumber} is Divisible by 5`);
        }
        else {
            console.log(`${sumNumber} is Not divisible by 3 or 5`);
        }
    console.log("                                                      ");
}
// Exercise #8
{
    console.log("\x1b[32mExercise #8 Write a program that checks if the given year is leap year or not.\x1b[0m");
    console.log("                                                      ");
    var leapyYear = 2024;
    if ((leapyYear % 4 == 0 && leapyYear % 100 !== 0) || leapyYear % 400 === 0) {
        console.log(`The year ${leapyYear} is a leap year`);
    }
    else {
        console.log(`The year ${leapyYear} is not a leap year`);
    }
    console.log("                                                      ");
}
// Exercise #9
{
    console.log("\x1b[32mExercise #9 Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.\x1b[0m");
    console.log("                                                      ");
    var dayis = 5;
    if (dayis == 1) {
        console.log("Mon");
    }
    else if (dayis == 2) {
        console.log("Tue");
    }
    else if (dayis == 3) {
        console.log("Wed");
    }
    else if (dayis == 4) {
        console.log("Thu");
    }
    else if (dayis == 5) {
        console.log("Fri");
    }
    else if (dayis == 6) {
        console.log("Sat");
    }
    else if (dayis == 7) {
        console.log("Sun");
    }
    else {
        console.log("invalid number please use a number from 1 to 7");
    }
    console.log("                                                      ");
    console.log("\x1b[32mUsing Switch case \x1b[0m");
    console.log("                                                      ");
    switch (dayis) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
    }
    console.log("                                                      ");
}
// Exercise #10
{
    console.log("\x1b[32mExercise #10  Write a program tWhere the tax amount will be calculated by the amount of bill.\x1b[0m");
    console.log("\x1b[32mTakes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax\x1b[0m");
    console.log("                                                      ");
    var unitConsumed = 210;
    var unitPrice = 12;
    if (unitConsumed < 100) {
        console.log(`Your ${unitConsumed} Units are lower then 100 Units 0% tax will be applied you have to Pay`, unitConsumed * unitPrice, "$");
    }
    else if (unitConsumed >= 100 && unitConsumed <= 200) {
        console.log(`Your ${unitConsumed} Units are above 100 Units 10% tax will be applied have to Pay`, unitConsumed * unitPrice + unitConsumed * unitPrice * 0.1, "$");
    }
    else if (unitConsumed >= 200 && unitConsumed <= 500) {
        console.log(`Your ${unitConsumed} Units are above 200 Units 15% tax will be applied have to Pay`, unitConsumed * unitPrice + unitConsumed * unitPrice * 0.15, "$");
    }
    else {
        console.log(`Your ${unitConsumed} Units are above 500 Units 25% tax will be applied have to Pay`, unitConsumed * unitPrice + unitConsumed * unitPrice * 0.25, "$");
    }
    console.log("                                                      ");
}
