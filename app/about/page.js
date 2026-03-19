import React from 'react'

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-gray-200 px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        About 𝓟𝓪𝓮𝓽𝓻𝓸𝓷
      </h1>

      {/* Content */}
      <div className="max-w-2xl space-y-4 text-center">

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
          𝓟𝓪𝓮𝓽𝓻𝓸𝓷 is a platform designed to empower creators by providing them with the tools and support they need to connect with their audience and monetize their content. Our mission is to help creators turn their passion into a sustainable career by offering a seamless experience for both creators and supporters.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
          Whether you're an artist, writer, musician, or any type of creator, 𝓟𝓪𝓮𝓽𝓻𝓸𝓷 provides you with the resources to grow.
        </p>

      </div>
    </div>
  )
}

export default About