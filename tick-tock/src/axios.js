import axios from 'axios';


const instance = axios.create({
    baseURL:"https://bhandari-mern-tiktok.herokuapp.com/"
})

export default instance;