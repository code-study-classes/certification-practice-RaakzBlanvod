function calculateDistance(x1, x2) {
  return Math.abs(x1 - x2);
}

function calculateSegmentProduct(A, B, C) {
  const lengthAC = Math.abs(C - A);
  const lengthBC = Math.abs(B - C);
  const product = lengthAC * lengthBC;
  return product;
}

function calculateKilobytes(fileSizeInBytes) {
  const kilobytes = Math.floor(fileSizeInBytes / 1024);
  return kilobytes;
}

function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA / lengthB);
}

function calculateDigitSum(twoDigitNumber) {
  const tens = Math.floor(twoDigitNumber / 10);
  const ones = twoDigitNumber % 10;
  return tens + ones;
}

function swapHundredsAndTens(twoDigitNumber) {
  const hundreds = Math.floor(twoDigitNumber / 100);
  const tens = Math.floor((twoDigitNumber % 100) / 10);
  const units = twoDigitNumber % 10;
  return hundreds * 10 + tens * 100 + units;
}

function getHundredsDigit(number) {
  if (number > 999) {
    return Math.floor((number % 1000) / 100);
  }
  return 0;
}

function getFullHours(seconds) {
  return Math.floor(seconds / 3600);
}

function getDayOfWeek(dayOfYear) {
  let days = 0;
  let count = 0;
  while (days < dayOfYear) {
    days += 1;
    count += 1;
    if (count === 7) count = 0;
  }
  return count;
}

function countSquares(A, B, C) {
  const squaresByWidth = Math.floor(A / C);
  const squaresByHeight = Math.floor(B / C);
  const totalSquares = squaresByWidth * squaresByHeight;
  return totalSquares;
}

export {
  calculateDistance, calculateSegmentProduct, calculateKilobytes,
  calculateSegments, calculateDigitSum, swapHundredsAndTens, getHundredsDigit,
  getFullHours, getDayOfWeek, countSquares,
};
