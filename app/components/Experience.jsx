'use client'
export default function Experience() {
  return (
    <section className='mt-20 grid md:grid-cols-2 gap-10'>
      <div>
        <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>Work Experience</h3>
        <div className='space-y-4'>
          <div className='p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition'>
            <div className='font-semibold text-gray-900 dark:text-gray-100'>Full Stack Developer — Secret MindTech</div>
            <div className='text-sm text-purple-600 dark:text-purple-400 font-medium'>Sep 2024 — Present • Surat</div>
            <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>
              Engineered and maintained end-to-end web applications using Next.js, React.js, Node.js, PostgreSQL, SQL, and GraphQL.
            </p>
          </div>

          <div className='p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition'>
            <div className='font-semibold text-gray-900 dark:text-gray-100'>Software Developer Intern — BBD Software</div>
            <div className='text-sm text-purple-600 dark:text-purple-400 font-medium'>Jan 2024 — Jul 2024 • Pune</div>
            <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>
              Improved telecom system efficiency by 20% through performance-focused backend enhancements. Developed RESTful APIs using Spring Boot and MySQL.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>Education</h3>
        <div className='space-y-4'>
          <div className='p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition'>
            <div className='font-semibold text-gray-900 dark:text-gray-100'>Master of Computer Application (MCA)</div>
            <div className='text-sm text-purple-600 dark:text-purple-400 font-medium'>2022 — 2024</div>
            <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>
              Veer Narmad South Gujarat University (VNSGU), Surat
            </p>
          </div>

          <div className='p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition'>
            <div className='font-semibold text-gray-900 dark:text-gray-100'>Bachelor of Computer Application (BCA)</div>
            <div className='text-sm text-purple-600 dark:text-purple-400 font-medium'>2019 — 2022</div>
            <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>
              Shree Uttar Gujarat College (VNSGU), Surat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
