import axios from 'axios';
import { User } from '../interfaces';

export const userExists = async (email: String): Promise<any> => {
    const response = await axios.post('https://churchblog.herokuapp.com/api/ping', { email }); 
    return typeof (response) === 'string' ? true : false
}


export const userProfile = async (token: string): Promise<User> => {
    const response = await axios.post("http://localhost:9000/v1/auth/signup", {
        headers: { Authorization: token }
    })
    return response?.data
}
