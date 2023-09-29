import axios from 'axios';

 

class ServiceInvoker {

  static async ApiCall() {

    var responseJson = '';

    const new_instance = axios.create({

      baseURL: 'https://jsonplaceholder.typicode.com',

      timeout: 1000,

    });

    await new_instance({

      method: 'get',

      url: '/posts',

    }).then(response => {

      // const products = response.data;

      console.log('response ----------> ', response);

      responseJson = response;

      return responseJson;

    });

    return responseJson;

  }

}

export default ServiceInvoker;