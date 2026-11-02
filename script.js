// Part 1: Time-based Greeting
let userName = prompt("Please enter your name:");
let currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log(`${greeting}, ${userName}!`);

// Part 2: Age and Days Lived Verification
let birthYearStr = prompt("Please enter your birth year:");
let birthYear = Number(birthYearStr);
let currentYear = 2026;
let age = currentYear - birthYear;
let daysLived = age * 365;

console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}