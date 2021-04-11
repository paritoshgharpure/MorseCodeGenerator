const DOT = '.';
const DASH = '-';
let morseEntry = [];

const dotPress = () => {
  morseEntry.push('.');
};

const dashPress = () => {
  morseEntry.push('-');
};

const showCode = () => {
  alert('inside showCode');
  let i = 0;
  for (i in morseEntry) {
    console.log(morseEntry[i]);
  }
};
