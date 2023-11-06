function countUppercaseLetters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count += 1;
    }
  }

  return count;
}

function combineStrings(N1, N2, S1, S2) {
  if (S1.slice(0, N1) + S2.slice(-N2) === S1.slice(0, 0) + S2.slice(0)) {
    return '';
  }
  return S1.slice(0, N1) + S2.slice(-N2);
}

function containsSubstring(S, S0) {
  return S.includes(S0);
}

function replaceSubstring(S, S1, S2) {
  return S.replace(S1, S2);
}

function countWordsWithSameLetters(sentence) {
  const words = sentence.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 0 && word[0].toLowerCase() === word[word.length - 1].toLowerCase()) {
      count++;
    }
  }

  return count;
}

function countWordsWithA(sentence) {
  const words = sentence.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.toLowerCase().includes('a')) {
      count++;
    }
  }

  return count;
}

function normalizeSpaces(sentence) {
  const trimmedSentence = sentence.trim();
  const normalizedSentence = trimmedSentence.replace(/\s+/g, ' ');
  return normalizedSentence;
}

function extractFileName(fullFileName) {
  const lastSlashIndex = fullFileName.lastIndexOf('/');
  const fileNameFull = fullFileName.slice(lastSlashIndex + 1, fullFileName.length);
  const fisrtDotIndex = fileNameFull.indexOf('.');
  const fileName = fileNameFull.slice(0, fisrtDotIndex);
  return fileName;
}

function encryptSentence(sentence) {
  let evenChars = '';
  let oddChars = '';

  for (let i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) {
      // символы на четных позициях
      evenChars += sentence[i];
    } else {
      // символы на нечетных позициях
      oddChars += sentence[i];
    }
  }

  // Обратный порядок символов на четных позициях
  evenChars = evenChars.split('').reverse().join('');

  // Объединяем символы на четных и нечетных позициях
  const encryptedSentence = evenChars + oddChars;

  return encryptedSentence;
}

function checkBrackets(expression) {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === '(', char === '[', char === '{') {
      stack.push({ char, position: i });
    } else if (char === ')', char === ']', char === '}') {
      if (stack.length === 0) {
        return i;
      }

      const lastBracket = stack.pop();
      const openingBracket = getOpeningBracket(char);

      if (lastBracket.char !== openingBracket) {
        return i;
      }
    }
  }

  if (stack.length > 0) {
    return stack[0].position;
  }

  return 0;
}

function getOpeningBracket(closingBracket) {
  switch (closingBracket) {
    case ')':
      return '(';
    case ']':
      return '[';
    case '}':
      return '{';
    default:
      return '';
  }
}

export {
  countUppercaseLetters, combineStrings, containsSubstring,
  replaceSubstring, countWordsWithSameLetters, countWordsWithA, normalizeSpaces,
  extractFileName, encryptSentence, checkBrackets,
};
