import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});