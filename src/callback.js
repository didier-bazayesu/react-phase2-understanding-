// function handleFetching(message , callback){
//     return callback(message);
// }

import { use } from "react";


//  function callback(message){
//     return new Promise((resolve,reject)=>{
//        message ? resolve(message) : reject("Failed")
//     })
// }

// console.log(handleFetching("hello didier", callback));


async function userWithTodos(){
 let [users, todos] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),
    fetch(" https://jsonplaceholder.typicode.com/todos")]);

    return await todos.json();

 }
 userWithTodos().then(console.log)

