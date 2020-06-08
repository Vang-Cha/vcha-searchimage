import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 14lUQzMb_Hk_R-laT89PsCB3rb2lLz0tQha7hmWTIpU'
    }
})