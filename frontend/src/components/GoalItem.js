import { useDispatch } from "react-redux";
import { deleteGoal } from '../features/goals/GoalService'

export default function GoalItem({ goal }) {
    const dispatch = useDispatch()
    return (
        <div className='Goal'>
            <div>
                {new Date(goal.createdAt).toLocaleString('en-uk')}
            </div>
            <h2>{goal.text}</h2>
            <button className='close' onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
        </div>
    )
}
