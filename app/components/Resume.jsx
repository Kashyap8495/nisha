'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { getDynamicData } from '@/app/data/dynamicData'

function ResumeContent() {
  const searchParams = useSearchParams()
  const { experiences } = getDynamicData(searchParams)

  return (
    <section id='resume' className='mt-24 scroll-mt-32'>
      <h2 className='text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12'>
        Resume
        <p className='!text-sm font-normal text-gray-600 dark:text-gray-400'>
          My professional journey and educational background
        </p>
      </h2>
      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <h2 className='text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100'>
            Work Experience
          </h2>

          {experiences.map((exp, idx) => (
            <div key={idx} className='relative pl-10 border-l-2 border-purple-400 dark:border-purple-600 pb-12'>
              <span className='absolute -left-[9px] top-1 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-2 border-white dark:border-gray-900'></span>

              <div className='inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-1 rounded-full text-sm mb-3 font-medium'>
                {exp.duration}
              </div>

              <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>{exp.role}</h3>
              <p className='text-purple-600 dark:text-purple-400 mb-1 font-medium'>{exp.company} • {exp.location}</p>
              <ul className='text-gray-600 dark:text-gray-300 text-sm mt-3 space-y-1 list-disc list-inside'>
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className='text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100'>Education</h2>

          <div className='relative pl-10 border-l-2 border-purple-400 dark:border-purple-600 pb-12'>
            <span className='absolute -left-[9px] top-1 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-2 border-white dark:border-gray-900'></span>

            <div className='inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-1 rounded-full text-sm mb-3 font-medium'>
              2022 – 2024
            </div>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>Master of Computer Application (MCA)</h3>
            <p className='text-purple-600 dark:text-purple-400 mb-1 font-medium'>
              Veer Narmad South Gujarat University (VNSGU), Surat
            </p>
          </div>

          <div className='relative pl-10 border-l-2 border-purple-400 dark:border-purple-600 pb-12'>
            <span className='absolute -left-[9px] top-1 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-2 border-white dark:border-gray-900'></span>

            <div className='inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-1 rounded-full text-sm mb-3 font-medium'>
              2019 – 2022
            </div>

            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>Bachelor of Computer Application (BCA)</h3>
            <p className='text-purple-600 dark:text-purple-400 mb-1 font-medium'>
              Shree Uttar Gujarat College (VNSGU), Surat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Resume() {
  return (
    <Suspense fallback={
      <section id='resume' className='mt-24 scroll-mt-32'>
        <h2 className='text-4xl font-bold text-center text-accent dark:text-purple-400 mb-12'>
          Resume
          <p className='!text-sm font-normal text-gray-600 dark:text-gray-400'>
            My professional journey and educational background
          </p>
        </h2>
        <div className='text-center text-gray-600 dark:text-gray-400'>Loading...</div>
      </section>
    }>
      <ResumeContent />
    </Suspense>
  )
}
