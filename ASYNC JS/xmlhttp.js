const fetchData = (callback) => {
    const request = new XMLHttpRequest()

    // requesting data from the server
    request.open('GET', 'https://dummyjson.com/products')
    request.send()
    
    //getting a response and Checking its status then doing something
    request.addEventListener('readystatechange',  () => {
      if (request.readyState === 4 && request.status === 200) {
        // if all goes well and i get the data
        callback(undefined, request.responseText)
      }else if(request.readyState === 4) {
        // if there is an error
        callback("no data to show", undefined)
      }
    })
  } 

  //calling the fetchData function with a callback function as arguement
  fetchData((err, data) => {
    console.log('call back fired')
    if(err) {
      console.log(err)
    }else {
      console.log(data)
    }
  })