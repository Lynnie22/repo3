import { useState } from "react"
import useWorkoutStore from "../../stores/workoutStore"
import WorkoutCard from "../common/WorkoutCard";



const WorkoutHistory = () => {
    const workoutEntries = useWorkoutStore((state) => state.workoutEntries);
    const [searchTerm, setSearchTerm] = useState('');

    //Function to group workouts by date 
    const groupWorkoutsByDate =(workouts) => {
        return workouts.reduce((acc, workout) => {
            const workoutDate = new Date (workout.timestamp). toLocaleDateString();

            if(!acc[workoutDate]) {
                acc[workoutDate] = [];
            }
            acc[workoutDate].push(workout);

            return acc;
        }, {});
    };

    //getting the grouped workouts by date 
    const groupedWorkouts = groupWorkoutsByDate(workoutEntries);

    //Handling search term input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    //filtering workouts by exercise name or date
    const filteredWorkouts = Object.keys(groupedWorkouts).filter((date)=>date.includes(searchTerm) ||
groupedWorkouts[date].some((workout)=> workout.exercise.toLowerCase().includes(searchTerm.toLowerCase())
)
);

  return (
    <div>
      <h2 className="text-3xl md:text-5xl mt-8 text-center font-bold mb-4">Workout History</h2>

      <div className="mb-4">
        <input
         type="text"
         className="p-2 border rounded-md w-full"
         placeholder="search by exercise or date"
         value={searchTerm}
         onChange={handleSearchChange} />
      </div>

      {/* displaying grouped workouts */}
      {filteredWorkouts.length === 0 ? (
        <p>No workouts found. Try logging some workouts or adjust your search</p>
      ): (
        <div className="space-y-2">
            {filteredWorkouts.map((date, index) => (
                <div key={index} className="px-4 py-2 mb-2 text-black rounded-xl shadow-xl border-2 border-darkpink">
                    <h3 className="text-md font-semibold ">{date}</h3>
                    {groupedWorkouts[date].map((workout, workoutIndex) => (
                        <WorkoutCard key={workoutIndex} workout={workout}/>
                    ))}
                </div>

            ))}
        </div>
      )}

    </div>
  );
};

export default WorkoutHistory
