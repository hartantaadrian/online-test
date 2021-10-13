function findFirstStringInBracket(str) {
  if (str.length > 0) {
    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
      if (wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        console.log(indexClosingBracketFound);
        if (indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        }
      }
    }
    return "";
  }
}
