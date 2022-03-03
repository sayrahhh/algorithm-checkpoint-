function myData(sentence) {
  let length = sentence.length;
  let words = sentence.split(" ").length;
  let vowels = sentence.match(/[aeiou]/gi).length;
  return `The sentence has ${length} characters, it has ${words} words and ${vowels} vowels`;
}

console.log(myData("my name is sarah"));
