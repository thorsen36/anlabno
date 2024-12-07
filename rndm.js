// random.js

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    if (min > max) {
        console.error("Min should be less than or equal to Max");
        return null;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const min = 1;
const max = 100;

console.log(`Generating a random number between ${min} and ${max}...`);
const randomNumber = getRandomNumber(min, max);

if (randomNumber !== null) {
    console.log(`Random Number: ${randomNumber}`);
} else {
    console.error("An error occurred while generating the random number.");
}
