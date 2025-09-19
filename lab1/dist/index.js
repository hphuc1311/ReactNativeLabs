"use strict";
// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(hello("200Lab"));
Object.defineProperty(exports, "__esModule", { value: true });
//bai1
const bai1_1 = require("./bai1");
console.log("\nBài 1");
var person = new bai1_1.Person("Hong Phuc", 20);
console.log(person);
//bai2
const bai2_1 = require("./bai2");
console.log("\nBài 2");
var student = new bai2_1.Student("Hong Phuc", 20, "A");
student.display();
//bai3
const bai3_1 = require("./bai3");
console.log("\nBài 3");
var car = new bai3_1.Car("Toyota", "Camry", 2022);
car.show();
//bai4
const bai4_1 = require("./bai4");
console.log("\nBài 4");
var rec = new bai4_1.Rectangle(3, 5);
console.log("Area rectangle: " + rec.area());
console.log("Perrectangle: " + rec.perimeter());
//bai5
const bai5_1 = require("./bai5");
console.log("\nBài 5");
var bankAccount = new bai5_1.BankAccount(100);
const amount = 500;
console.log("Bank is having: ", bankAccount.balance);
bankAccount.deposit(amount);
console.log("Bank account after deposit " + amount + ": ", bankAccount.balance);
var bankAccount = new bai5_1.BankAccount(100);
bankAccount.withdraw(amount);
if (bankAccount.balance < 0 && amount > bankAccount.balance)
    console.log("Bank account is not enough to withdraw");
else
    console.log("Bank account after withdraw " + amount + ": ", bankAccount.balance);
// bai6
const bai6_1 = require("./bai6");
console.log("\nBài 6");
var book = new bai6_1.Book("Abc", "xyz", 2025);
book.display();
