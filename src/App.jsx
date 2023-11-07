import { useState } from 'react'
import './App.css'

function App() {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid gap-8 items-center mb-8 lg:mb-24 lg:gap-12 lg:grid-cols-12">
          <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
            <h1 className="mb-4 text-4xl font-medium tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Matt Windle
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-600 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
              A React UI Develope behind captivating digital experiences. Crafting innovative interfaces is my passion. Let's elevate your web presence."
            </p>
          </div>
          <div className="col-span-6">
            img here
          </div>
        </div>
      </div>
    </section>


  )
}

export default App
