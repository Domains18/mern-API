import axios from 'axios'

// const API_URL = 'api/goals'

//create a new goal

const createGoal = async (goalData, token) =>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post( 'http://localhost:5000/api/goals/', goalData, config);
    return response.data
}

//get service

const getGoals = async (token) =>{
    const config ={
        headers: {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get('http://localhost:5000/api/goals', config)

    return response;
}

const goalService = {
    createGoal,
    getGoals,
}

export default goalService