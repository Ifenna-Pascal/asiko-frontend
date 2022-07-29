import axios from 'axios';

export const userExists = async (email:String): Promise<any> =>  {
    const response = await axios.post('https://churchblog.herokuapp.com/api/ping', {email});
    // const response = 
    return typeof(response) === 'string' ? true : false
}