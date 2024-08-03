// const isUserLoggedIn = true
// const isUserLoggedIn = false
// if (isUserLoggedIn) {
// console.log("Execute");
// }


// const temperature = 41

// if (temperature < 50) {
//     console.log("The temperature is less than 50");
// }
// else ("The temperature is greater than 50");

// if ( temperature === 40 ){
//         console.log("Less than 50");
//     } 
// else {
//     console.log("Temperature is greater than 40")
// };

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  //It is true but this is wrong way to write



// This is for the many condition--

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {   //-- all the condition is tottaly True
if (userLoggedIn && debitCard && 2==3) {      //-- Last condition is false  
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}