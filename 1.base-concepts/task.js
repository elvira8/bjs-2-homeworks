"use strict";

function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  
  if (d === 0) {
    let root = (-b) / (2 * a);
    arr.push(root);
  } else if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 1200;
  let S = amount - contribution;
  let n = countMonths;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  let sum = Number((payment * countMonths).toFixed(2));
  
  return sum;
}

module.exports = {
  solveEquation,
  calculateTotalMortgage
};