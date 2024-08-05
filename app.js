

for (var i = 0; i < 10; i++) {
    console.log(`I am still under ${i} and I am still under 10`);
};

//I'm a teacher and I want to get a meann of the total of the class
let grades = [78, 89, 35, 90, 76];
let sum;

console.log(grades.length);

for (let i = 0; i < grades.length; i++) {
    //console.log(grades[i]);
    sum += grades[i];   
}

console.log(sum);
console.log(sum / grades.length);

const favFruits = ["pineapple", "orange", "strawberry", "grapes"]

let fruit = "orange";

for (let i = 0; i < favFruits.length; i++) {
    if (fruit == favFruits[i]) {
        console.log("I'm in da Basket");
        break;
    } else {
        console.log("Not in the string");
    }
}


for (let i = 0; i < favFruits.length; i++) {
    if(favFruits[i] == "orange") {
        favFruits[i] = favFruits[i].toUpperCase();
         console.log(favFruits);
    } else {
        console.log("You're not my orange");
    }
}


//For Loop structure
//for (Initialization; condition; iteration) {}

for (let i = 0; i < 5; i++) {
    //We can utilize the variable i in for loop arguements
    // "i" variable number is changing each loop because of the interation argument (i++)

    console.log("Monday is a Amazing day to start the week! " + i);
    console.log(`Monday is a Amazing day to start the week! ${i}`);
}

let seasons = ["springs", "winter", "summer", "fall"];
let favSeason = "fall";
//Display all seasons on the websites console
for (let i = 0; i < seasons.length; i++) {
    //we call array string by variables index.
    //ex. season[1], seasons[2]...
    console.log(seasons[i]);
}


for (let i = 0; i <seasons.length; i++) {
    if (favSeason == seasons[i]) {
        console.log("That's my favorite season!");
        break;
    } else {
        console.log("skip");
    }
}


//! List of Favorite Movies
let favMovies = ["300", "Ironman", "Face/Off", "Good Will Hunting"]
//TODO Define an array of favorite movies
// Output each movie individually
for (let i = 0; i < favMovies.length; i++) {
     console.log(favMovies[i]);    
}


//! Sum of Array Elements
let myNum = [4, 5, 6, 10, 20];
let mySum = 0;
//TODO Define an array of 5 numbers 
//TODO Calculate sum of the numbers
for (let i = 0; i < myNum.length; i++) {
    mySum += myNum[i];
}
//  Output the results
console.log(mySum);


//! Update Array Elements
//TODO Define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"];
//TODO Update
for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "green") {
        //? green to cyan
        colors[i] = "cyan";
    } else if (colors[i] === "purple") {
        //? purple to orange
        colors[i] = "orange";
    }
}
//  Output the results
console.log(colors);



//! Grade Categorizer
//TODO Define a array of 5 grade numbers
let listGrade = [34, 63, 74, 82, 96];
//TODO Categorize each grade
for (let i = 0; i < listGrade.length; i++) {
    if (listGrade[i] < 60) {
        console.log(`Student grade: F`);
    } else if (listGrade[i] >= 60 && listGrade[i] < 70) {
        console.log(`Student grade: D`);
    } else if (listGrade[i] >= 70 && listGrade[i] < 80) {
        console.log(`Student grade: C`);
    } else if (listGrade[i] >= 80 && listGrade[i] < 90) {
        console.log(`Student grade: B`);
    } else if (listGrade[i]  >= 90 && listGrade[i] < 100) {
        console.log(`Student grade: A`);
    } 
}

//  Output each result


//! Day of the Week Checker
//TODO Define an array of days of the week
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//TODO Define a variable for the day to check
let checkDay = "sunday";
//TODO Check if the day is a weekday or weekend
for (let i = 0; i < days.length; i++) {
    if (days[i]  === checkDay) {
        if (days[i] === "sunday" || days[i] === "saturday") {
            console.log(`It's ${checkDay}, still a weekend!`);
        } else {
            console.log(`It's ${checkDay}, still a weekday!`);
        }
    }
}
// OUTPUT the result




//! Temperature Checker
//TODO Define a array of 5 temperature numbers
let temp = [45, 57 , 68, 74, 83, 101]
//TOD Categorize the temperatures in 3 types (HOT, COLD, just right)
for (let i = 0; i < temp.length; i++) {
    if (temp[i] >= 85){
        console.log("HOT");
    } else if (temp[i] >= 60 && temp[i] < 85){
        console.log("just right temperature");
    } else if (temp[i] <= 59) {
        console.log("COLD");
    } else {
        console.log("Which planet are you from??");
    }
}
// OUTPUT the result




//! Number Sign Checker
//TODO Define a array of 5 numbers
let num = [20, 24, 38, 56, 78, 98];

//TODO Check the sign of the number
// OUTPUT the result

for (let i = 0; i < num.length; i++) {
    if (num[i] < 50) {
        console.log("Negative");
    } else if (num[i] >= 50) {
        console.log("Positive");
    } else {
        console.log("UNKNOWN");
    }
}