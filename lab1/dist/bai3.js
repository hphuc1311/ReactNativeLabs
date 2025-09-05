"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    show() {
        console.log("Car Info \nBrand: " +
            this.brand +
            ", model: " +
            this.model +
            ", year: " +
            this.year);
    }
}
exports.Car = Car;
