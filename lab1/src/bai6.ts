export class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  display(): void {
    console.log(
      "Book Info \nTitle: " +
        this.title +
        ", Author: " +
        this.author +
        ", Year: " +
        this.year
    );
  }
}
