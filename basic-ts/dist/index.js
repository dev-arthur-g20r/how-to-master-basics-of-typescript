"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(personalInfo, institution) {
        this.averageGrade = 90;
        this.personalInformation = personalInfo;
        this.institution = institution;
    }
    displayStudent() {
        console.log("\n");
        console.log("Name: " + this.personalInformation.firstName + " " + this.personalInformation.lastName);
        console.log("Age: " + this.personalInformation.age);
        console.log("institution:" + this.institution);
    }
}
class StudentRecordData extends Student {
    displayGrade() {
        console.log(this.personalInformation.firstName + " " + this.personalInformation.lastName + " = " + this.averageGrade);
    }
}
let person1 = {
    firstName: "Arthur Tristan",
    lastName: "Ramos",
    age: 25
};
let person2 = {
    firstName: "Sean Alfred",
    lastName: "Salvador",
    age: 20
};
let student1 = new Student(person1, "Gordon College");
let student2 = new Student(person2, "St. Louis University");
console.log(student1.personalInformation);
student1.displayStudent();
student2.displayStudent();
let record1 = new StudentRecordData(person2, "St. Louis University");
record1.displayGrade();
const readline = __importStar(require("readline"));
const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var number1 = 0;
var operator = "";
var number2 = 0;
console.log("\n\nCALCULATOR");
inputReader.question('Number 1: ', (input) => {
    number1 = parseFloat(input);
    inputReader.question('Operator: ', (input) => {
        operator = input;
        inputReader.question('Number 2: ', (input) => {
            number2 = parseFloat(input);
            var result = 0.0;
            if (operator.trim() == "+") {
                result = add(number1, number2);
            }
            else if (operator.trim() == "-") {
                result = subtract(number1, number2);
            }
            else if (operator.trim() == "*") {
                result = multiply(number1, number2);
            }
            else if (operator.trim() == "/") {
                result = divide(number1, number2);
            }
            if (["+", "-", "*", "/"].includes(operator)) {
                console.log(number1 + " " + operator + " " + number2 + " = " + result);
            }
            else {
                console.log("Invalid operator!");
            }
            inputReader.close();
        });
    });
});
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
