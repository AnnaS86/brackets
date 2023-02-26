module.exports = function check(str, bracketsConfig) {
  // your solution
  const OPEN = ['(', '[', '{', '1', '3', '5', '7', '8'];
  const PAIR = {
  ['(']: ')',
  ['[']: ']',
  ['{']: '}',
  ['1']: '2',
  ['3']: '4',
  ['5']: '6',
  ['7']: '7',
  ['8']: '8',
  };
function isBracketsTrue (str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentBracket = str[i];
      if (OPEN.includes(currentBracket)) {
        stack.push(currentBracket);
      } else {
        if (stack.length === 0) {
          return true;
        }

        let top = stack(stack.length - 1);

        if (PAIR(currentBracket) === top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
}






