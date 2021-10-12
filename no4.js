let string = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
let mainArr = [];
var groups = {};
for (var i = 0; i < string.length; i++) {
  let wordObj = {};
  let loopGroup;
  let word = string[i];
  let arrWord = word.split("");
  loopGroup = arrWord.sort();
  wordObj = {
    group: loopGroup.join(),
    word: word,
  };
  mainArr.push(wordObj);

  var groupName = loopGroup.join();
  if (!groups[groupName]) {
    groups[groupName] = [];
  }
  groups[groupName].push(mainArr[i].word);
}

mainArr = [];
for (var groupName in groups) {
  mainArr.push(groups[groupName]);
}
console.log(mainArr);
