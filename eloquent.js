//Minimum

function min (first, second) {
  return Math.min(first,second)
}
  console.log(min(0, 10));
// → 0
  console.log(min(0, -10));
// → -10


//Recursion
// Zero is even.

// One is odd.

 //For any other number N, its evenness is the same as N - 2.

function isEven (n){

  if (n < 0) {
    n=Math.abs(n)
  }

  if (n === 0) {
    return true;
  }
  else if (n===1) {
    return false;
  }
  else return isEven (n-2)
  }
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-69));
// → ??

//bean counting

function countBs (str) {
    var count = 0;
    for (var i=0; i < str.length; i++ ) {
      if (str.charAt(i) === "B"){
        count++;
      }
    }
    return count;
}
function countChar (str , char) {
    var count = 0;
    for (var i=0; i < str.length; i++ ) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
