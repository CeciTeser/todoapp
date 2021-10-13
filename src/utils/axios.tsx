import axios from 'axios';

const api = axios.create({
    baseURL:'https://todoapp-99a76-default-rtdb.firebaseio.com'
});

export { api }