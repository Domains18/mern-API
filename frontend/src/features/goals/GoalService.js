import axios from 'axios'

// const API_URL = 'api/goals'

//create a new goal

const createGoal = async (goalData, token) =>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post( 'http://localhost:5000/api/goals/', goalData, config);
    return response.data
}

const goalService = {
    createGoal
}

export default goalService