
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useWorkoutStore from "../../stores/workoutStore";
import './Logworkout.css';
import {  FaDumbbell, FaRedoAlt, FaWeightHanging, FaCalendarAlt } from "react-icons/fa";

// Validation schema using Yup
const validationSchema = Yup.object({
  exercise: Yup.string().required("Exercise is required"),
  sets: Yup.number().positive("Sets must be greater than zero").required("Sets are required"),
  reps: Yup.number().positive("Reps must be greater than zero").required("Reps are required"),
  weight: Yup.number().positive("Weight must be greater than zero").required("Weight is required"),
});

const Logging = () => {
  const addWorkout = useWorkoutStore((state) => state.addWorkout);
  const workoutEntries = useWorkoutStore((state) => state.workoutEntries);

  // Initial form values
  const initialValues = {
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newWorkout = {
      ...values,
      timestamp: new Date().toLocaleString(),
    };

    // Add workout to Zustand store
    addWorkout(newWorkout);

    // Save to local storage
    const storedWorkouts = JSON.parse(localStorage.getItem("workoutEntries")) || [];
    localStorage.setItem("workoutEntries", JSON.stringify([...storedWorkouts, newWorkout]));

    // Reset the form after successful submission
    resetForm();
  };

  return (
    <div className="bg-workout-bg bg-cover bg-center min-h-screen flex flex-col justify-center items-center p-5">
      <div className="glass w-full sm:w-3/4 md:w-1/2 lg:w-2/4 p-8 rounded-lg shadow-lg flex justify-center items-center">
        

        {/* Formik form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="w-full space-y-6 flex flex-col items-center">
              <h1 className="text-2xl  md:text-4xl lg:text-6xl font-bold text-white mb-5">Log Workout</h1>

              {/* Input exercise field */}
              <div className="w-full">
                <label htmlFor="exercise" className="text-white font-semibold">
                  Exercise
                </label>
                <Field
                  id="exercise"
                  name="exercise"
                  type="text"
                  placeholder="Enter exercise"
                  className="border-2 border-darkpink rounded-xl w-full bg-transparent text-pink-300 px-3 py-2 placeholder-pink-100"
                />
                <ErrorMessage name="exercise" component="p" className="text-red-500" />
              </div>

              {/* Input sets */}
              <div className="w-full">
                <label htmlFor="sets" className="text-white font-semibold">
                  Sets
                </label>
                <Field
                  id="sets"
                  name="sets"
                  type="number"
                  placeholder="Number of sets"
                  className="border-2 border-darkpink rounded-xl w-full bg-transparent  text-pink-300 px-3 py-2 placeholder-pink-100"
                />
                <ErrorMessage name="sets" component="p" className="text-red-500" />
              </div>

              {/* Input reps */}
              <div className="w-full">
                <label htmlFor="reps" className="text-white font-semibold">
                  Reps
                </label>
                <Field
                  id="reps"
                  name="reps"
                  type="number"
                  placeholder="Number of reps"
                  className="border-2 border-darkpink rounded-xl w-full bg-transparent  text-pink-300 px-3 py-2 placeholder-pink-100"
                />
                <ErrorMessage name="reps" component="p" className="text-red-500" />
              </div>

              {/* Input weight */}
              <div className="w-full">
                <label htmlFor="weight" className="text-white font-semibold">
                  Weight (kg)
                </label>
                <Field
                  id="weight"
                  name="weight"
                  type="number"
                  placeholder="Weight in kg"
                  className="border-2 border-darkpink rounded-xl w-full bg-transparent  text-pink-300 px-3 py-2 placeholder-pink-100"
                />
                <ErrorMessage name="weight" component="p" className="text-red-500" />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-darkpink text-white hover:bg-white hover:text-darkpink px-3 py-2 rounded-xl"
              >
                Log Workout
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Display logged workouts */}
      <div className="glass w-full sm:w-3/4 md:w-1/2 lg:w-2/4 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center mt-6">
        {workoutEntries.length === 0 ? (
          <p className="text-white">No workout logged yet</p>
        ) : (
          <ul className="space-y-4 w-full">
            {workoutEntries.map((workout, index) => (
              <li
                key={index}
                className="p-2 mb-2 bg-stone-500 text-white rounded-xl shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center"
              >
                <div className="flex items-center space-x-4">
                  <FaDumbbell size={20} className="text-darkpink" />
                  <span>{workout.exercise}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaRedoAlt size={20} className="text-darkpink" />
                  <span>{workout.sets} Sets</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaWeightHanging size={20} className="text-darkpink" />
                  <span>{workout.reps} Reps</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaWeightHanging size={20} className="text-darkpink" />
                  <span>{workout.weight} kg</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaCalendarAlt size={20} className="text-darkpink" />
                  <span>{workout.timestamp}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Logging;
