
// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string.
//
// An example:
//
// letterCount("hello world")
//
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
//
// Note that the space is not counted. All
// letters should also be converted to lower
// case when counting them.

function letterCount(sentence){

  if(typeof sentence === 'undefined') {
    return {};
  }
  
  var theLetters = sentence.replace(/\W+/g, "").toLowerCase().split("").sort();

  var results = {};
  var lastLetter;
  var indexing = 0;

  for (var i=0; i < theLetters.length; i++ ) {
    if(theLetters[i] === lastLetter) {
      indexing++;      

    } else {

      if(typeof lastLetter !== 'undefined') {
        results[lastLetter] = indexing; 
      }
      indexing = 1;
    }

    lastLetter = theLetters[i];

  }
  console.log(results);
  return results;

}

// tests

console.assert(letterCount("aBcabcaBcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)