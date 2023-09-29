const axios = require('axios')

 class ServiceInvoker {
   static ApiCall(){
        // Create a new instance of axios

//https://jsonplaceholder.typicode.com/posts

  const new_instance = axios.create({

    baseURL: 'https://jsonplaceholder.typicode.com/',

    timeout: 1000,

    headers: {

      'Accept': 'application/json',

    }

  })

 

  new_instance({

    method: 'get',

    url: '/posts'

  }).then(apiResponse => {

     const products = apiResponse.data
         
        console.log(  "productprint", products) 
      return   response.json(products) 
    
      
  })

    }
 }
 export default ServiceInvoker;

