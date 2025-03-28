﻿function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const s = this.perimeter / 2;
        return Number((Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() { return "Ошибка! Треугольник не существует"; },
            get area() { return "Ошибка! Треугольник не существует"; }
        };
    }
}