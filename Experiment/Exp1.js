// activity 1
// display student info let studentName, Number studenRoll, String studentEmail

console.log("Activity 1:")
let studentName = "Atharv" ;
let studenRoll = "24UAM310";
let studentEmail = "atharvniprul74@gmail.com";

console.log("Name = ", studentName);
console.log("Roll Number = ", studenRoll);
console.log("Email Address = ", studentEmail);

document.writeln("<h3>" + "Name = " + studentName + "</h3>");
document.writeln("<h3>" + "Roll Number = "+ studenRoll + "</h3>");
document.writeln("<h3>" + "Email Address = " +  studentEmail + "</h3>");

// activity 2
//check is number is even or odd
console.log("Activity 2:")
let num = 17;
if (num % 2 == 0)
    console.log("Even number.");
else
    console.log("Odd number.");
    

// activity 3
// check student pass or fail
console.log("Activity 3:")
let oop = 98;
let dbms = 91;
let dsa = 85;
let grade = (oop + dbms + dsa) / 3;
console.log(grade);
if (grade >= 40)
    console.log("Pass");
else
    console.log("Fail");

// activity 4
// print display number 1 - 10
console.log("Activity 4:")
for (let i = 1; i <= 20; i++){
    document.writeln("<h3>"+i+"</h3>");
    console.log(i);
}

// activity 5
console.log("Activity 5:")
let x =10;
y = x;
x =2001;
console.log(x, y);