import axios from 'axios';

const KEY = 'AIzaSyCSaixeAEdTY4Ewi1wR_GjzoFBYhWn8LlU';

 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key : KEY
        
    }
});


