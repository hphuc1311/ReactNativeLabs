export class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  show(): void {
    console.log(
      "Car Info \nBrand: " +
        this.brand +
        ", model: " +
        this.model +
        ", year: " +
        this.year
    );
  }
}
