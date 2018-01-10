//actions should include promise middlewares
// axios for network request
// redux-promise as a promise handler for redux
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FANCYHATS';

export function fetchPosts() {

    // actually performs request to api
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}