import axios from 'axios';

// const API_URL = 'api/users';

//register users
const register = async (userData) => {
    const response = await axios.post("http://localhost:5000/api/users", userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

//login users
const loginUser = async (userData) => {
    const response = await axios.post("http://localhost:5000/api/users/login", userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}
//logout
const logOut = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    loginUser,
    logOut
}
export default authService