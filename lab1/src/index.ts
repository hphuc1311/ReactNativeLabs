// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(hello("200Lab"));

//bai1
import { Person } from "./bai1";
console.log("\nBài 1");
var person = new Person("Hong Phuc", 20);
console.log(person);

//bai2
import { Student } from "./bai2";
console.log("\nBài 2");
var student = new Student("Hong Phuc", 20, "A");
student.display();

//bai3
import { Car } from "./bai3";
console.log("\nBài 3");
var car = new Car("Toyota", "Camry", 2022);
car.show();

//bai4
import { Rectangle } from "./bai4";
console.log("\nBài 4");
var rec = new Rectangle(3, 5);
console.log("Area rectangle: " + rec.area());
console.log("Perrectangle: " + rec.perimeter());

//bai5
import { BankAccount } from "./bai5";
console.log("\nBài 5");
var bankAccount = new BankAccount(100);
const amount: number = 500;

console.log("Bank is having: ", bankAccount.balance);

bankAccount.deposit(amount);
console.log("Bank account after deposit " + amount + ": ", bankAccount.balance);

var bankAccount = new BankAccount(100);
bankAccount.withdraw(amount);
if (bankAccount.balance < 0 && amount > bankAccount.balance)
  console.log("Bank account is not enough to withdraw");
else
  console.log(
    "Bank account after withdraw " + amount + ": ",
    bankAccount.balance
  );

// bai6
import { Book } from "./bai6";
console.log("\nBài 6");
var book = new Book("Abc", "xyz", 2025);
book.display();
