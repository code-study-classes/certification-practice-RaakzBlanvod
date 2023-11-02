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
    if  (S1.slice(0, N1) + S2.slice(-N2) === S1.slice(0, 0) + S2.slice(0)){
        return '';
    }
    return S1.slice(0, N1) + S2.slice(-N2);
}

function containsSubstring(S, S0) {}

function replaceSubstring(S, S1, S2) {}

function countWordsWithSameLetters(sentence) {}

function countWordsWithA(sentence) {}

function normalizeSpaces(sentence) {}

function extractFileName(fullFileName) {}

function encryptSentence(sentence) {}

function checkBrackets(expression) {}

export {
    countUppercaseLetters, combineStrings, containsSubstring,
    replaceSubstring, countWordsWithSameLetters, countWordsWithA, normalizeSpaces,
    extractFileName, encryptSentence, checkBrackets,
  };