//1.create one array,function and object
let cars = ["Mercedes","Porche","Tata","MG"]
console.log(cars)

function greet(name)
{
    console.log(`Hello ${name} !! How are youu !`)
}
greet("Shravani")

let student = {
    name:"Atharv",
    age:20,
    branch:"CSE AI/ML",
    CGPA:8.9
}
console.log(student)

//2.Reverse number,check number, 

//3.plaindrome,4.fibonachi series
//5.Find largest element in array
let max = 0
let array = [20,46,93,95,49,60]
for(let i=0;i<array.length;i++)
{
    if(array[i] > max)
    {
        max = array[i]
    }
}
console.log(max)
//6.Remove duplicate elements in array
//7.Find missing number in array
//8.Reverse a string
let name1 = "Atharv"
let reversedName1 = ""
for(let i=name1.length;i>=0;i--)
{
    reversedName1 += name1.charAt(i)
}
console.log(reversedName1)

//9.Count vowels in string 
let vowelCount = 0
for(let i=name1;i<name1.length;i++)
{
    if(name1.charAt(i) == "a" || "e" || "i" || "o" || "u")
    {
        vowelCount++
    }
}
console.log(vowelCount)

//10.check plaindrome in string
//11.check prime number
//12.factorial number
//13.function related 
//14.function to find sum of array

