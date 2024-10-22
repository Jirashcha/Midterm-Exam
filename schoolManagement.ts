// schoolManagement.ts

// Part 1: Classes and Object-Oriented Programming
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    private static totalStudentsCount = 0; // Static variable for total students
    grades: number[];

    constructor(name: string, age: number) {
        super(name, age);
        this.grades = [];
        Student.totalStudentsCount++; // Increment total students count
    }

    addGrade(grade: number): void {
        this.grades.push(grade); // Add a grade to the student's grades array
    }

    getAverageGrade(): number {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0); // Calculate total grades
        return this.grades.length > 0 ? total / this.grades.length : 0; // Return average or 0 if no grades
    }

    static totalStudents(): number {
        return this.totalStudentsCount; // Return total number of students
    }
}

// Part 2: Inheritance and Polymorphism
class Teacher extends Person {
    subject: string;
    students: Student[];

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
        this.students = []; // Initialize an empty array for students
    }

    assignGrades(student: Student, grade: number): void {
        student.addGrade(grade); // Assign a grade to the student
    }
}

// Part 3: Type Annotations and Interfaces
interface Admin {
    name: string;
    department: string;
}

function getAdminInfo(admin: Admin): void {
    console.log(`Admin Name: ${admin.name}, Department: ${admin.department}`); // Print admin info
}

// Part 4: Generics
class Database<T> {
    private entries: T[] = []; // Array to hold entries of type T

    addEntry(entry: T): void {
        this.entries.push(entry); // Add an entry to the database
    }

    getAllEntries(): T[] {
        return this.entries; // Return all entries in the database
    }
}

// Part 5: Functions and Higher-Order Functions
function createBonusAdder(bonus: number): (grade: number) => number {
    return (grade: number): number => grade + bonus; // Return a function that adds a bonus to a grade
}

// Part 6: Asynchronous Programming
async function fetchStudentData(): Promise<void> {
    try {
        // Simulate fetching data
        const studentData = { name: "John Doe", grades: [80, 90, 85] };
        console.log(`Fetched Student: ${studentData.name}, Grades: ${studentData.grades}`);
    } catch (error) {
        console.error("Error fetching student data:", error); // Handle errors
    }
}

// Part 7: Array Methods
function processStudents(students: Student[]): void {
    // Filter students with an average grade above 75
    const filteredStudents = students.filter(student => student.getAverageGrade() > 75);
    console.log("Students with average grade above 75:", filteredStudents.map(s => s.name));

    // Create an array of student names
    const studentNames = students.map(s => s.name);
    console.log("All Student Names:", studentNames);

    // Calculate total number of grades given across all students
    const totalGrades = students.reduce((acc, student) => acc + student.grades.length, 0);
    console.log("Total Number of Grades Given:", totalGrades);
}

// Part 8: Error Handling
function parseJSONData(jsonData: string): any {
    try {
        return JSON.parse(jsonData); // Attempt to parse JSON data
    } catch (error) {
        return "Parsing error: Invalid JSON data"; // Return error message if parsing fails
    }
}

// Part 9: jQuery DOM Manipulation (simulated with a console log)
function addStudentToList(studentName: string): void {
    // Simulating adding a student name to a list (you would normally use jQuery for actual DOM manipulation)
    console.log(`Added Student: ${studentName}`); // Simulated alert
}

// Sample Usage
const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
const teacher = new Teacher("Mr. Smith", 40, "Math");
const admin: Admin = { name: "Principal Johnson", department: "Administration" };

// Assign grades to students
teacher.assignGrades(student1, 90);
teacher.assignGrades(student1, 85);
teacher.assignGrades(student2, 78);

// Print total number of students and average grade for a student
console.log(`Total Students: ${Student.totalStudents()}`);
console.log(`Average Grade for ${student1.name}: ${student1.getAverageGrade()}`);

// Part 4: Use Database class
const db = new Database<Student>();
db.addEntry(student1);
db.addEntry(student2);
console.log("All Students in Database:", db.getAllEntries());

// Part 5: Use higher-order function
const bonusAdder = createBonusAdder(5);
const newGrades = student1.grades.map(bonusAdder);
console.log(`New Grades for ${student1.name}:`, newGrades);

// Fetch student data
fetchStudentData();

// Test JSON parsing
const jsonData = '{"name":"Charlie","grades":[95,88,76]}';
console.log(parseJSONData(jsonData));

// Part 7: Process Students
processStudents([student1, student2]);

// Part 9: Simulated jQuery DOM Manipulation
addStudentToList(student1.name);
