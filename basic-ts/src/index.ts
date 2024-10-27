class Student {
    public personalInformation: Person;
    private institution: string;
    protected averageGrade: number = 90;

    constructor(personalInfo: Person, institution: string) {
        this.personalInformation = personalInfo;
        this.institution = institution;
    }

    public displayStudent() {
        console.log("\n");
        console.log("Name: " + this.personalInformation.firstName + " " + this.personalInformation.lastName);
        console.log("Age: " + this.personalInformation.age);
        console.log("institution:" + this.institution);
    }
}

class StudentRecordData extends Student {
    public displayGrade() {
        console.log(this.personalInformation.firstName + " " + this.personalInformation.lastName + " = " + this.averageGrade);
    }
}

interface Person {
    firstName: string,
    lastName: string,
    age: number
}

let person1: Person = {
    firstName: "Arthur Tristan",
    lastName: "Ramos",
    age: 25
};

let person2: Person = {
    firstName: "Sean Alfred",
    lastName: "Salvador",
    age: 20
};

let student1: Student = new Student(person1, "Gordon College");
let student2 = new Student(person2, "St. Louis University");
console.log(student1.personalInformation);

student1.displayStudent();
student2.displayStudent();
let record1 = new StudentRecordData(person2, "St. Louis University");
record1.displayGrade();

import * as readline from 'readline';

const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var number1:number = 0;
var operator:string = "";
var number2:number = 0;

console.log("\n\nCALCULATOR")

inputReader.question('Number 1: ',
(input: string) => {
    number1 = parseFloat(input);
    inputReader.question('Operator: ',
    	(input: string) => {
    		operator = input;
    		inputReader.question('Number 2: ',
    			(input: string) => {
    				number2 = parseFloat(input);
                    var result = 0.0;

    				if (operator.trim() == "+") {
    					result = add(number1, number2);
    				} else if (operator.trim() == "-") {
                        result = subtract(number1, number2);
                    } else if (operator.trim() == "*") {
                        result = multiply(number1, number2);
                    } else if (operator.trim() == "/") {
                        result = divide(number1, number2);
                    }

                    if (["+", "-", "*", "/"].includes(operator)) {
                        console.log(number1 + " " + operator + " " + number2 + " = " + result);
                    } else {
                        console.log("Invalid operator!");
                    }

                    
    				inputReader.close();
    			});
    	});
});

function add(num1: number, num2: number) : number {
    return num1 + num2;
}

function subtract(num1: number, num2: number) : number {
    return num1 - num2;
}

function multiply(num1: number, num2: number) : number {
    return num1 * num2;
}

function divide(num1: number, num2: number) : number {
    return num1 / num2;
}