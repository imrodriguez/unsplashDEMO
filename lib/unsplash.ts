import { createApi } from 'unsplash-js';

const API = createApi({
    accessKey: process.env.ACCESS_KEY || '',
});

export { API };