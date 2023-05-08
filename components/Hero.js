import React from 'react'

export const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">WRITE YOUR OWN STORY
          <br class="hidden lg:inline-block" />
        </h1>
        <p class="mb-8 leading-relaxed">Dream big, toil for it, and achieve it. We at ICFAI University assist you in your journey of a bright future by providing with quality education.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">APPLY NOW</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dev.iutripura.in/images/icfai_tripura_hero_pic.webp" />
      </div>
    </div>
  </section>
  )
}
