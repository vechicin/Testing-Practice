function reverseString(string) {
  console.log(string.split('').reverse().join(''));
  return string.split('').reverse().join('');
}

reverseString('Hello');

module.exports = reverseString;