"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  } if (d === 0) {
    arr = [-b / (2 * a)];
  } else if {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let creditBody = amount - contribution;
  if (creditBody <= 0) {
    return 0;
  }
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;
  return Number(totalPayment.toFixed(2));
}
