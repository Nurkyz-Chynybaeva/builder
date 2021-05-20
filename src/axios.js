import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = 'https://builder-c1f06-default-rtdb.firebaseio.com';


export default instance;