function countCharacter(str, char) {
  str = str.split('');
  let count = 0;
  str.forEach(el => {
    if (el.toLowerCase() === char.toLowerCase()) {
      count++
    }
  })
  return count;
}

function capitalizeFirstCharacterOfWords(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

function reverseWord(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
    str[i] = str[i].reverse();
    str[i] = str[i].join('')
    }
  str = str.reverse()
  return str.join(' ')
}

function reverseAllWords(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
    str[i] = str[i].reverse();
    str[i] = str[i].join('')
    }
    return str.join(' ')
}

function replaceFirstOccurence(str, findThis, replaceWith) {
  let start = str.indexOf(findThis)
  let end = str.indexOf(findThis) + findThis.length
  return str.slice(0, start) + replaceWith + str.slice(end);
}

function encode(str) {
  str = str.split(' ');
  str = str.map(el => el.split(''))
  str.forEach(word => word.push('^^'))
  str = str.reduce((acc, curr) => acc.concat(curr))
  str.forEach(letter=>{
    switch (letter) {
      case 'a':
      str[str.indexOf(letter)] = '@'
      break;
      case 's':
      str[str.indexOf(letter)] = '$'
      break;
      case 'o':
      str[str.indexOf(letter)] = '0'
      break;
      case 'i':
      str[str.indexOf(letter)] = '!'
      break;
      case '^^':
      str[str.indexOf(letter)] = ' '
      break;                        
    }
  })
  return str.join('');
}

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?")); 
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
}
/*
3
What Is The Color Of The Sky?
?yks eht fo roloc eht si tahW
tahW si eht roloc fo eht ?yks
What is the color of the water?
Wh@t !$ the c0l0r 0f the $ky?
*/
displayMessage();
