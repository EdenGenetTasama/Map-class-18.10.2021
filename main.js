let fruitMap = new Map([
  ["peach", "orang"],
  ["banana", "yellow"],
  ["tomato", "red"],
  ["onion", "white"],
  ["cucumber", "green"],
]);
fruitMap.set("eggplant", "purple");
fruitMap.set("blackberry");

// fruitMap.set("blackberry" , "blue");

// fruitMap.keys();
console.log(fruitMap.keys());
console.log(fruitMap.values());

for (item of fruitMap.keys()) {
  if (fruitMap.get(item) == "orang") {
    console.log(`${fruitMap.get(item)}, ${item}`);
  }
}



let peopleMap = new Map();
peopleMap.set("Eden", 24);
peopleMap.set("Yafit", 25);
peopleMap.set("Keren", 23);
peopleMap.set("Tikva", 26);
// console.log(peopleMap);

console.log("Keys:", peopleMap.keys());
console.log("Values", peopleMap.values());

for (const iterator of peopleMap.keys()) {
  trKeys.innerHTML += `<th>${iterator}</th>`;
  trValues.innerHTML += `<td>${peopleMap.get(iterator)}</td>`;
}

let category = new Map();
category.set("Colors", ["Red", "Blue", "Pink", "Grey"]);
category.set("Animals", ["Dog", "Cat", "Dolphin", "Ant"]);
category.set("Shapes", ["Circle", "square", "triangle", "trapezoid"]);
console.log(category);

let vehicles = new Map();
vehicles.set("carOne", { type: "toyota", year: 2020, smk: 100 });
vehicles.set("carTwo", { type: "mazda", year: 2000, smk: 2000 });
vehicles.set("carThree", { type: "suzuki", year: 1999, smk: 3000 });

//! צרו מחלקה של מחשב, עם שדות של שם חברה, דגם, שנה וצבע.
//! צרו 4 מופעים שונים.
//! צרו MAP של מחשבים, הKEY הוא דגם המחשב והערך הוא אובייקט של מחשב.
//! צרו כפתור שבלחיצה עליו קופצת הודעה של האם מחשב ממודל "Lenovo" קיים בMAP.

class Computer {
  company;
  model;
  color;
  year;
  constructor(company, model, color, year) {
    this.company = company;
    this.model = model;
    this.color = color;
    this.year = year;
  }
}

let computerOne = new Computer("Dell", "inspire 15", "grey", 2020);
let computerTwo = new Computer("Lenovo", "X", "Black", 2014);
let computerThree = new Computer("Asus", "P", "blue", 2011);
let computerFour = new Computer("HP", "R", "Red", 2000);

let computerArray = [computerOne, computerTwo, computerThree, computerFour];

let computerMap = new Map();

computerArray.forEach((computerItem) => {
  computerMap.set(computerItem.model, computerItem);
});

console.log(computerMap);
// console.log(computerMap.has("Lenovo"));

btnId.onclick = () => {
  computerMap.has("inspire 15") ? alert("Yes") : alert("No");
};

/************************************************* */

// משימת סטודנטים
//!1.	צרו מחלקה של סטודנט, עם שדות שם פרטי, שם משפחה, גיל וממוצע ציונים.
//!1.2.	צרו MAP שמכיל 3 סטודנטים, הKEY הוא השם הפרטי של הסטודנט והערך הוא האובייקט.
//!1.3.	צרו דיב לכל סטודנט, בדיב רשום שם הסטודנט.
//!1.4.	בעת ריחוף, הפרטים של הסטודנט מודפסים ללוג.
//!1.5.	בעת ריחוף, הדיב גדל ומוצגים בו הפרטים של הסטודנט.

class Students {
  fname;
  lname;
  age;
  averageGrate;
  constructor(fname, lname, age, average) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.averageGrate = average;
  }

}

let studentOne = new Students("Eden", "Tasama", 24, 85);
let studentTwo = new Students("Daniel", "Tal", 25, 100);
let studentThree = new Students("Yafit", "Samuel", 26, 90);

let arrayOfStudents = [studentOne, studentTwo, studentThree];
let studentMap = new Map();

arrayOfStudents.forEach((element) => {
studentMap.set(element.fname, element);
  studentsSection.innerHTML += `<div class="students"> ${element.fname}</div>`;
});
// console.log(studentMap);


let students = document.getElementsByClassName("students");

for (let i = 0; i < students.length; i++) {
    students[i].onmouseover=()=>{
        // studentMap.has( students[i].innerText)? console.log(studentMap.get( students[i].innerText)):"";
        studentMap.has( students[i].innerText)? console.log(studentMap.get( students[i].innerText)):"";

    }
}








