import { Person } from "./bai1";

export class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  display(): void {
    console.log(
      "Student Info \nName: " +
        this.name +
        ", age: " +
        this.age +
        ", grade: " +
        this.grade
    );
  }
}
