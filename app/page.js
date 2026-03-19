import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-white gap-6 px-4 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8">
          Welcome to 𝓟𝓪𝓮𝓽𝓻𝓸𝓷
        </div>

        <p className="text-sm sm:text-base text-gray-300">
          A platform for creators to connect with their supporters.
        </p>

        <div className="mt-2 gap-4 flex flex-col sm:flex-row">
          <Link href={"/login"}>
            <button className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg text-sm px-4 py-2.5">
              Start Now
            </button>
          </Link>

          <Link href={"/about"}>
            <button className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg text-sm px-4 py-2.5">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-white h-[1px] opacity-10 w-full my-10"></div>

      {/* Features Section */}
      <div className="text-white max-w-6xl mx-auto px-4">
        <h1 className="text-lg sm:text-xl font-bold text-center mt-6">
          Your fans can now support you
        </h1>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center my-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img className="rounded-full w-24 h-24 object-cover" src="/man.jpg" alt="Profile" />
            <p className="font-bold mt-3">Fund Yourself</p>
            <p className="text-sm text-gray-400">
              Your fans are available to support you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img className="rounded-full w-24 h-24 object-cover" src="/group.jpg" alt="Group" />
            <p className="font-bold mt-3">Build Community</p>
            <p className="text-sm text-gray-400">
              Connect with your audience easily.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img className="rounded-full w-24 h-24 object-cover" src="/coins.jpg" alt="Coins" />
            <p className="font-bold mt-3">Fans Want to Help</p>
            <p className="text-sm text-gray-400">
              Your fans are ready to support you.
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="bg-white h-[1px] opacity-10 w-full"></div>

      {/* Video Section */}
      <div className="flex flex-col my-8 justify-center items-center text-white px-4">
        <h1 className="text-lg sm:text-xl font-bold text-center mb-4">
          Learn More About Us
        </h1>

        <div className="w-full max-w-3xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ib5GpmvZMdI"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}