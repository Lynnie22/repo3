import Hero from "../common/Hero"
import Cards from "../common/Cards"
import Motivation from "../common/Motivation"

const Home = () => {
  return (
    <div>
      <Hero  heroTitle="Track your fitness" heroText="Monitor your workouts, track progress, and improve your fitness effortlessly."/>
      <Cards/>
      <Motivation/>
    </div>
  )
}

export default Home
