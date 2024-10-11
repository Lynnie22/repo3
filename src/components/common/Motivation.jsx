const Motivation = () => {
    return (
      <div className="h-auto w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-56 bg-gradient-to-br from-darkpink  to-pink rounded-xl p-8 ">
        <div className="flex flex-col justify-center items-center text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-pink">
              Strong.<br/>
              Confident.<br/>
              Unstoppable.
          </h2>
          <p className="text-lg lg:text-xl font-medium text-white mt-4">Every Rep is a Step Towards 
          the Best Version of You.</p>
        </div>
  
        <div className="w-full lg:w-1/2">
          <img src="/src/assets/images/motivation.png" alt="" className="h-auto w-full object-cover" />
        </div>
      </div>
    )
  }
  
  export default Motivation
