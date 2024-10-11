import { useState } from "react";
import useWorkoutStore from "../../stores/workoutStore"


const WorkoutCard = ({workout}) => {
    const workoutEntries = useWorkoutStore((state)=> state.workoutEntries);

    const [isExpanded, setIsExpanded] = useState(false)

    //toggle expanded state
    const toggleExpandedState = () => {
        setIsExpanded(!isExpanded);
    };

  return (
    <div className="px-2 py-1">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="text-xl font-semibold text-black">{workout.exercise}</h3>
                <p className="text-sm text-gray-500">Logged on: {workout.timestamp}</p>
            </div>

            <button className="text-darkpink"
            onClick={toggleExpandedState}>
                {isExpanded ? 'Hide Details' :  'View Details'}
            </button>
        </div>
       
       {/*showing workout details if the card is expanded  */}
       {isExpanded && (
        <div className="mt-2">
            <p><strong>Sets:</strong>{workout.sets}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p><strong>Weight:</strong>{workout.weight}</p>
        </div>
       )}
    </div>
  )
}

export default WorkoutCard
