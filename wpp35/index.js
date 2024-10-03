function bintodec(num) { 
   return parseInt((num + '').replace(/[^01]/gi, ''), 2);
}

console.log(bintodec('110011'));
console.log(bintodec('100'));
