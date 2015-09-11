// ! ! !
// Three Bugs
//These are the bugs that I found:

//1. in the for loop, I changed it to array[i] = calculateSTI(array[i]);
//2. in the switch, I just "returned basePercent; instead of the -1 at the end"
//3. I put in "Math.round, when setting newArray[2] and newArray[3]"


var Atticus = {
  name: "Atticus",
  employeeId: "2405",
  salary: "47000",
  review: 3
};

var Jem = {
  name: "Jem",
  employeeId: "62347",
  salary:  "63500",
  review: 4
};

var Boo = {
  name: "Boo",
  employeeId: "11435",
  salary: "54000",
  review: 3
};

var Scout = {
  name: "Scout",
  employeeId: "6243",
  salary: "74750",
  review: 5
};

console.log(Scout);
console.log(Jem);
console.log(Boo);
console.log(Atticus);

var array = [Atticus, Jem, Boo, Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(personObj){
  var newObject = {};

  newObject.name = personObj.name;
  console.log("What is the " + newObject);

  var employeeNumber = personObj.employeeId;
  var baseSalary = personObj.salary;
  var reviewScore = personObj.review;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.bonus = " " + bonus;
  newObject.newSalary = " " + Math.round(baseSalary * (1.0 + bonus));
  newObject.raise = " " + Math.round(baseSalary * bonus);
  // This code also works to get the spaces in the array, but it's the non-fancy way
  //console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]); 
  
  console.log(newObject);
  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;

}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}