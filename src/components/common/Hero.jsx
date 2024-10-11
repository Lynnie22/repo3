import Button from "./Button"
const Hero = ({heroTitle, heroText}) => {
  return (
    <div className="relative">
      <img src="/assets/images/woman-training-weightlifting-gym.jpg"  alt="image of woman in gym"
      className="h-1/2 w-full object-cover rounded-xl"/>
       <div className="absolute inset-0 bg-gradient-to-r from-pink-800 via-transparent to-black opacity-40 rounded-xl"></div>
      <div className="absolute flex flex-col inset-0 justify-center items-center text-center">
        <h1 className="text-2xl lg:text-8xl font-extrabold text-darkpink mb-4">{heroTitle}</h1>
        <p className="text-md lg:text-4xl text-white font-normal leading-4">{heroText}</p>
        <Button/>
      </div>



    </div>
  )
}

export default Hero
