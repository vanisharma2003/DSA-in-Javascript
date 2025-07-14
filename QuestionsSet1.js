//palindrome number
function isPalindrome(x){
  return x<0?false:x === +x.toString().split("").reverse().join("")
}
// console.log(isPalindrome(10))

//fibonacci series
function calculateFibonacci(x){
    if(x<0){
        return
    }
    let arr = [0,1]
    for(let i=2;i<=x;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr
}

// console.log(calculateFibonacci(5))

//fibonacci series using recursion
function fibonacciRecursion(n){
    if(n<=1) return n
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
}

// console.log(fibonacciRecursion(4))

// Anagram phrase or word

function checkAnagram(originalWord,derivedWord){
  console.log(originalWord.toLowerCase().split("").sort().join())
  console.log(derivedWord.toLowerCase().split("").sort().join())
  console.log(originalWord.toLowerCase().split("").sort().join() === derivedWord.toLowerCase().split("").sort().join())
}
// console.log(checkAnagram("Anagram","nagaram"))