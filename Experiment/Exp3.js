// 1.Diff Arrow fun and simple
function greet(name)
{
    console.log(name)
}
greet("Atharv !!")

const greet1 = (name) => {
    console.log(name)
}
greet1("DKTE !!")

// 2.What is use of this in arrow and simple
function useOfThis()
{
    console.log(this)
}
useOfThis()

const useOfThis2 = () => {
    console.log(this)
}
useOfThis2()

// 3.why we not use this key in arrow
// Write code for arrow fun with 3 examples
const getName = (name) => {
    console.log(`Hello ${name}`)
}
getName("LESP")

const getArray = (arr1) => {
    console.log(arr1)
}
getArray([1,2,4,5,6,7,8])

const addTwo = (n1,n2) => console.log(`${n1} + ${n2} = ${n1+n2}`)
addTwo(5,5)

// write code for Switch case in js
let day = 1
switch(day)
{
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wedensday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    
    default:
        console.log("Invalid Choice")

}
// How use truthty and falsey value with examples
// ternary in js
let age  = 17
console.log(`Person is ${age>18?"Eligible for Voting.":"Not Eligible for voting."}`)

// Write a code for how to use loops in array for all
let array = [12,3,46,74,23,86,24]
console.log("Array using for loop:")

for(let i=0;i<array.length;i++)
{
    console.log(array[i])
}

console.log("Array using While loop:")

let start = 0
while(start !== array.length)
{
    console.log(array[start])
    start++
}

console.log("Array using Do While loop:")
let end = array.length-1
do{
    console.log(array[end])
    end--
}while(end != -1)

console.log("Array using for in loop:")
for(let idx in array)
{
    console.log(array[idx])
}

console.log("Array using for of loop:")
for(let ele of array)
{
    console.log(ele)
}

console.log("Array using forEach loop:")
array.forEach(e => console.log(e))

// diff btn for of and for in with example
// for in loop works on index and for of directly iterate over element in array.

// Write how to use filter and map example 3 in js
let numberArray = [21,53,23,85,90,22,20,34]
let newNumberArray1 = numberArray.map(ele => ele*ele)
console.log(newNumberArray1)

console.log("Even numbers from Array:")
let filterArray = numberArray.filter(ele => ele%2 == 0).forEach(ele => console.log(ele))
// console.log(numberArray.)
