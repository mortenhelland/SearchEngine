import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID ecc11a816c4f0590415202095f7f78c401c3df6758f0ee8643aa3208d93925df'
    }
});