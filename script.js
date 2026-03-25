// ARRAY METHODS
const numbers = [1, -2, 3, 4, -5, 12];

const doubled = numbers.map(n => n * 2);
const positives = numbers.filter(n => n >= 0);
const firstBig = numbers.find(n => n > 10);
const product = numbers.reduce((t, n) => t * n, 1);

// OBJECT BASICS
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: { city: "New York" }
};

person.age = 31;

// CALCULATOR OBJECT
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
};

// OBJECT ITERATION
const scores = { math: 95, english: 88, science: 92 };
Object.entries(scores).forEach(([sub, score]) => {
  console.log(sub, score);
});

// ARRAY OF OBJECTS
const students = [
  { name: "Alice", grade: 85, major: "CS" },
  { name: "Bob", grade: 72, major: "Math" },
  { name: "Charlie", grade: 90, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const charlie = students.find(s => s.name === "Charlie");

// MINI PROJECT
const gradeTracker = {
  students: [],

  addStudent(name, grades) {
    this.students.push({ name, grades });
  },

  getStudentAverage(name) {
    const s = this.students.find(x => x.name === name);
    const vals = Object.values(s.grades);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }
};

gradeTracker.addStudent("Alice", { math: 95, english: 88 });

// DAILY CHALLENGES
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

const reverse = str => str.split("").reverse().join("");
const unique = arr => [...new Set(arr)];