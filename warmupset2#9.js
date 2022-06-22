function countVowels(str) {
    return str.match(/[aeiou]/g).length;
}

console.log(countVowels("mary had a little lamb"));