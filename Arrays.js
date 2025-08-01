//declaration
// const array = new Array(1,2,3,4,5)
// console.log(array)
// const newarray = [1,2,3]
// console.log(newarray)
// const array = ['vani',true,3,{
//     name:'Adi',
//     age:22
// }]
// array.push('dd')
// console.log(array)
// array.pop()
// console.log(array)
// array.unshift('bananan')
// console.log(array)
// array.shift()
// console.log(array)
//loops 
// for (let i = 0;i<array.length;i++){
    // console.log(array[i])
// }
//in-bulit loops
//map function
const array = [1,2,3,4,5]
const newArray = array.map((item,index,array)=>{
return item +5
})
// console.log(newArray)
// it returns a new array
//filter function
// it also returns a new array but with a specific condition
const filterArray = array.filter((item,index,array)=>{
return item>2
})
// console.log(filterArray)
//reduce method
//reduce method basically it reduces an array into a single value
const reduceMethod = array.reduce((prev,item,index,array)=>{
return prev+item
},1)
// console.log(reduceMethod)
//some method it true or false only even if one element satisfies the condition
const someArray = array.some((item,index,array)=>{
return item>1
})
// console.log(someArray)
//every method it returns true if all the elements satisfies the condition
const everyArray = array.every((item,index,array)=>{
    return item>10
})
// console.log(everyArray)
//find-> returns the value of item which satisfies the condition first otherwise it returns undefined
const findArray = array.find((item)=>{
return item >1
})
// console.log(findArray)
//spread and rest operator
const nums1=[1,2,3]
const nums2 = [4,5,6]
// console.log(new Array(...nums1,...nums2))
//confusion between spread and rest operator
//conact -> retuns a new array
// console.log(nums1.concat(nums2,array))
//slice -> certain part of an array
// start index and end index and exclude the end index
const fruits=["Apple","Banana","Cherry","Lichi"]
// console.log(fruits.slice(-2)) -> cherry and lichi
//splice method -> it does not return a new array
// console.log(fruits.splice(0,1,"Guava"))
// console.log(fruits) -> this will shows the result
//fill method 
// console.log(fruits.fill("vani",3))
// findIndex
// console.log(fruits.findIndex((item)=>item == "vani"))
//flat method
const numbers = [1,2,[3,4],[5,6,7,[6]]]
// console.log(numbers.flat(2))
// 2 provides us depth
//reverse
// console.log(fruits.reverse())
//sort function
const sortThisArray = [10,6,11,1]
// console.log(sortThisArray.sort((a,b)=>a-b)) ascending order
