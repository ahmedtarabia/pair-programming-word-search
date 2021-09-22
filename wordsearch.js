const wordSearch = (letters, word) => { 
  let newArr = [];  
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true
    } 
  }
  for(let i = 0; i < letters[0].length; i++) { //row
    newArr.push([]); 
    for(let j = 0; j < letters.length; j++) { //column
      newArr[i].push(letters[j][i]);

    }
  }
  const verticalJoin= newArr.map(ls => ls.join(''))
  for (l of verticalJoin) { 
    if (l.includes(word)) {
      return true
    } 
  }
  console.log(newArr.join(''))
  console.log(verticalJoin)
  return false
}


module.exports = wordSearch