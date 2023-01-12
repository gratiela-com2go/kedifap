import axios from "axios";

const getProducts = async () => {
   const response =  await axios.post('http://localhost/kedifap/products/', {
        header: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
        }

    });

    console.log(response.data);

    return response.data;
};

export default getProducts;