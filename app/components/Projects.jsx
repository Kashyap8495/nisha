'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProjectCard from './ProjectCard'
import { getDynamicData } from '@/app/data/dynamicData'
import fostercare from '@/app/assets/images/fostercare.png'
import Darlink from '@/app/assets/images/darlink.png'
import Finideas from '@/app/assets/images/finideas1.png'
import Vertelier from '@/app/assets/images/vertelier.png'
import leadtree from '@/app/assets/images/leadtree.png'
import coddered from '@/app/assets/images/coddered.jpeg'

// Image mapping for projects
const projectImages = [
  coddered, leadtree, Vertelier, Finideas, fostercare, Darlink, coddered
]

function ProjectsContent() {
  const searchParams = useSearchParams()
  const { projects } = getDynamicData(searchParams)

  // Map projects with images
  const list = projects.map((proj, idx) => ({
    ...proj,
    img: projectImages[idx % projectImages.length], // Cycle through available images
  }))

  const [visible, setVisible] = useState(6)

  const handleToggle = () => {
    setVisible(visible === 6 ? list.length : 6)
  }

  return (
    <section id='work' className='mt-24 text-center scroll-mt-32'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>My Projects</h2>
      <p className='mb-10 text-gray-600 dark:text-gray-400 mb-12'>
        A selection of real-world products & platforms I've contributed to
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {list.slice(0, visible).map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            tech={p.tech}
            link={p.link}
            img={p.img}
          />
        ))}
      </div>

      <button
        onClick={handleToggle}
        className='mt-10 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition'
      >
        {visible === 6 ? 'Show More' : 'Show Less'}
      </button>
    </section>
  )
}

export default function Projects() {
  return (
    <Suspense fallback={
      <section id='work' className='mt-24 text-center scroll-mt-32'>
        <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>My Projects</h2>
        <div className='text-center text-gray-600 dark:text-gray-400'>Loading...</div>
      </section>
    }>
      <ProjectsContent />
    </Suspense>
  )
}
