//symobl - example
const anotherId = Symbol("123")
console.log(anotherId)
console.log(typeof (anotherId))

const id = 123
console.log(id === anotherId)

//JS is dynamic typed language.

//array
const cars = ["Merc", "Porche", "Land Rover", "Audi"]
const num = [1, 2, 3, 4, 5]

console.log(cars)
console.log(num)

//objects
const obj = {
    fname: "Atharv",
    age: 20
}
console.log(obj.fname)

//functions
function display() {
    console.log("Hello From Function !!")
}
display()

const myfunc = function() {
    console.log("Other Function !!")
}   
myfunc()