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
  const hundreds = Math.floor(twoDigitNumber / 100) * 100;
  const tens = Math.floor((twoDigitNumber % 100) / 10) * 10;
  const ones = twoDigitNumber % 10;
  const swappedNumber = tens + hundreds + ones;
  return swappedNumber;
}

function getHundredsDigit(number) {
  if (number > 999) {
    return Math.floor((number % 1000) / 100);
  }
  return 0;
}

function getFullHours(seconds) {
  if (seconds !== Number.isInteger(seconds) || seconds < 0) {
    return '';
  }
  return Math.floor(seconds / 3600);
}

function getDayOfWeek(dayOfYear) {
  const dayOfWeek = (dayOfYear - 1) % 7;
  return dayOfWeek;
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
