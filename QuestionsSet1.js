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

// anagram or not using objects

function anagramObject(s,t){
  console.log(s.length)
  console.log(t.length)
  if (s.length !== t.length) return false;
  let obj1={}
  let obj2={}
  for(let i=0;i<s.length;i++){
    obj1[s[i]] = (obj1[s[i]]||0)+1;
    obj2[t[i]] = (obj2[t[i]]|| 0)+1
  }
  console.log("object 1",obj1)
  console.log("object 2",obj2)
  for (const key in obj1) {
   if(obj1[key] !== obj2[key]) return false
  }
  return true
}

// console.log(anagramObject("vanisharma","sharmavani"))

//two sum
let array = [1,2,3,4]
target = 6 
function twoSum(array,target){
  for(i=0;i<array.length;i++){
   for(j=i+1;j<array.length;j++){
    if( array[i]+array[j] === target){
      return [i,j]
    }
   }
  }
   return null
}
// console.log(twoSum(array,target))

//two sum using objects
function twoSumUsingObjects(array,target){
  let obj={}
  for(let i=0;i<array.length;i++){
    let n = array[i]
    // obj[n] = i
    if((target-n) in obj){
      return [obj[target-n],i]
    }
    else{
      obj[n]=i
    }
  }
}

// console.log(twoSumUsingObjects(array,target))

//maximum profit
function maxProfit(prices){
  let globalProfit = 0;
  for(let i=0;i<prices.length;i++){
    for(let j=i;j<prices.length;j++){
      const maxProfit = prices[j]-prices[i]
      if(maxProfit>globalProfit) globalProfit = maxProfit
    }
  }
  return globalProfit
}
console.log(maxProfit([7,1,5,3,6,4]))
