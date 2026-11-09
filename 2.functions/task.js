function getArrayParams(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let differ = 0;
  if (arr.length > 0) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    differ = max - min;
  }
  return differ;
}

function differenceEvenOddWorker(...arr) {
  let differ = 0;
  if (arr.length > 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    differ = sumEvenElement - sumOddElement;
  }
  return differ;
}

function averageEvenElementsWorker(...arr) {
  let avgEvenElement = 0;
  if (arr.length > 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    if (countEvenElement > 0) {
      avgEvenElement = sumEvenElement / countEvenElement;
    }
  }
  return avgEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

module.exports = {
  getArrayParams,
  summElementsWorker,
  differenceMaxMinWorker,
  differenceEvenOddWorker,
  averageEvenElementsWorker,
  makeWork
};