import axios from 'axios';

//--------FIREBASE--------

const api = axios.create({
    baseURL:'https://todoapp-99a76-default-rtdb.firebaseio.com'
});



export { api }


//--------BREEDS--------

const apiBreeds= axios.create({
    baseURL: 'https://api.thedogapi.com/v1/breeds?api_key=f80ca8cc-8dd0-417c-a14a-e2623d80adb6',

});

export { apiBreeds };
