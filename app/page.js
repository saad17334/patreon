

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-white gap-8">
      <div className="text-3xl font-bold mt-8">Welcome to 𝓟𝓪𝓮𝓽𝓻𝓸𝓷</div>
      <p>A platform for creators to connect with their supporters.</p>
      <div className="mt-2 gap-4 flex flex-col sm:flex-row">
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Start Now</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read More</button>
      </div>
    </div>

    <div className="bg-white h-1 opacity-5 w-full mt-30"></div>

    <div className="text-white container mx-auto">
      <h1 className="text-lg font-bold text-center mt-6">Your fans can now support you</h1>
      <div className="flex gap-5 justify-between my-6 max-w-4xl mx-auto">
        <div className="flex flex-col rounded-full justify-center items-center">
          <img  className=" rounded-full" width="100" height="100" src = "/man.jpg" alt ="Profile Image"/>
          <p className="font-bold text-center my-2">Fund YourSelf </p>
          <p>Your fans are available to support you.</p>
        </div>

        <div className="flex flex-col rounded-full justify-center items-center">
          <img  className=" rounded-full" width="100" height="100" src = "/group.jpg" alt ="Profile Image"/>
          <p className="font-bold text-center my-2">Fund YourSelf </p>
          <p>Your fans are available to support you.</p>
        </div>

        <div className="item space-y-3 flex flex-col rounded-full justify-center items-center">
          <img  className=" rounded-full" width="100" height="100" src = "/coins.jpg" alt ="Profile Image"/>
          <p className="font-bold text-center my-2">Fans want to help</p>
          <p>Your fans are available to support you .</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-5 w-full "></div>

    <div className=" flex flex-col my-4 justify-center items-center text-white container">
      <h1 className="text-lg font-bold text-center my-4">Learn More About Us</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ib5GpmvZMdI?si=oxxYfgzQ9-HVv_Wk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
  );
}
