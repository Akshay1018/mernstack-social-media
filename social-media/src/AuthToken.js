import axios from 'axios';

const AuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['token'] = token;
    } else {
        delete axios.defaults.headers.common['token'];
    }
}

export default AuthToken;