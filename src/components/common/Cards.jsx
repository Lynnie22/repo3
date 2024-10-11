import { Link } from "react-router-dom"

const Cards = () => {
  return (
    <div className="relative grid h-96 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 my-7">
      <div className="relative ">
      <img
          src="/assets/images/pexels-shu-lei-2809836-13849063.jpg"
          alt="Workout Image"
          className="h-full w-full object-cover rounded-xl border-4 border-darkpink shadow-xl transition-all ease-in hover:drop-shadow-xl hover:-translate-y-3"/>
            <Link to="logworkout" className="absolute bottom-4 left-4 font-bold text-white text-2xl">Log Workout</Link>
      </div>

      <div className="relative ">
      <img
          src="/assets/images/pexels-shu-lei-2809836-13849063.jpg"
          alt="Workout Image"
          className="h-full w-full object-cover rounded-xl border-4 border-darkpink shadow-xl transition-all ease-in hover:drop-shadow-xl hover:-translate-y-3"/>
            <Link to="history" className="absolute bottom-4 left-4 font-bold text-white text-2xl">Workout History</Link>
      </div>
    </div>
  )
}

export default Cards
