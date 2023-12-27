// Asynchronous js with  fetch api

// Promise chaining
fetch('todos/james.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("not found", err))

    
// Async/await
const fetchTodos = async () => {
    const response = await fetch('todos/prince.json')
    
    if(response.status !== 200) {
        throw new Error("couldn't find any data")
    }

    const data = await response.json()
    return data
}

fetchTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected: ', err.message))



// -------------------------------------------------------------------------------

// Asynchronous javascript with Promises using XMLHttpRequest
const fetchData = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    // requesting data from the server
    request.open('GET', resource)
    request.send()
    
    //getting a response and Checking its status then doing something
    request.addEventListener('readystatechange',  () => {
      if (request.readyState === 4 && request.status === 200) {
        // if all goes well and i get the data
        const data = JSON.parse(request.responseText)
        resolve(data)
      }else if(request.readyState === 4) {
        // if there is an error
        reject("error occured while fetching data")
      }
    })
  })
}

fetchData("todos/james.json").then(data => {
  console.log('promise resolved: ', data)
  return fetchData("todos/mark.json")
}).then(data => {
  console.log("promise 2 resolved: ", data)
  return fetchData("todos/prince.json")
}).then(data => {
  console.log("promise 3 resolve: ", data)
}).catch(err => {
  console.log("promise rejected: ", err)
})



// -------------------------------------------------------------------------------

// Asynchronous js with callback functions
const fetchDataUsingCallback = (resource, callback) => {
    const request = new XMLHttpRequest()

    // requesting data from the server
    request.open('GET', resource)
    request.send()
    
    //getting a response and Checking its status then doing something
    request.addEventListener('readystatechange',  () => {
      if (request.readyState === 4 && request.status === 200) {
        // if all goes well and i get the data
        const mango = JSON.parse(request.responseText)
        callback(undefined, mango)
      }else if(request.readyState === 4) {
        // if there is an error
        callback("error occured while fetching data", undefined)
      }
    })
}
//calling the fetchData function with a resource and a callback function as arguement
fetchDataUsingCallback("todos/james.json", (err, data) => {
  if (data) {console.log(data)} else console.log(err)
  fetchDataUsingCallback("todos/mark.json", (err, data) => {
    if (data) {console.log(data)} else console.log(err)
    fetchDataUsingCallback("todos/prince.json", (err, data) => {
      if (data) {console.log(data)} else console.log(err)
    })
  })
})


