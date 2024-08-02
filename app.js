

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