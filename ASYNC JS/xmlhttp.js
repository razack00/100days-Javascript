const fetchData = (resource, callback) => {
    const request = new XMLHttpRequest()

    // requesting data from the server
    request.open('GET', resource)
    request.send()
    
    //getting a response and Checking its status then doing something
    request.addEventListener('readystatechange',  () => {
      if (request.readyState === 4 && request.status === 200) {
        // if all goes well and i get the data
        const data = JSON.parse(request.responseText)
        callback(undefined, data)
      }else if(request.readyState === 4) {
        // if there is an error
        callback("no data to show", undefined)
      }
    })
  } 

  console.log(1)
  console.log(2)

  //calling the fetchData function with a resource and a callback function as arguement
  fetchData("todos/james.json", (err, data) => {
    console.log(data)
    fetchData("todos/mark.json", (err, data) => {
      console.log(data)
      fetchData("todos/prince.json", (err, data) => {
        console.log(data)
      })
    })
  })

  console.log(3)