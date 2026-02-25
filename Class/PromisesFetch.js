// Promise -> is an object that represent future results of an async operation.
// means i promise to give reslult later.

// promises has three states 1.Pending 2.Resolved/Fulfilled (Success) 3.Reject.

// let myPromise = new Promise((resolve,reject) => { let success = true; success?resolve("Data Fetched"):reject("Data not available")})

// myPromise.then(res => console.log(res)).catch(err => console.log(err))

// //home activity why promises is better than callbacks.

// let myTimePromise = new Promise((resolve,reject) => setTimeout(() => { console.log("Async task completed."); resolve()},3000))
// myTimePromise.then(() => console.log("Promise Consumed !!") )

// let myNewPromise3 = new Promise((res,rej) => setTimeout(() => { res({"username":"Atharv","id":"24UAM310"},2000)}))
// myNewPromise3.then(user => console.log("User Data:" + user))

// home activity 2 -> Create 4 promises example 1.var if true show obj 2.asyanc keyword promises and 2 simple examples

// fetch method
// is a bulit in JS method used to make HTTP request return promises.

// fetch(url) it return promises 
fetch("https://jsonplaceholder.typicode.com/users/2")
.then(data => { return data.json() })
.then(data => console.log(data))
.catch(error => console.log(error))

//how to use fetch in async and await
// fetch user display names in html list, fetch posts show only first 5 records , create fake prmoise resolve aftrt 3 sec reject 3 sec

// what is prmoise in js.,staus , diff callback vs promises what is fetch in js ? what it returns ? why do we use response.json() ? diff btn then and catch and async and await ? what is promise chain ?