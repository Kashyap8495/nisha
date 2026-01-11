'use client'
export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Redux/Context API', 'Tailwind CSS', 'MUI', 'Ant Design', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'Architecture & Tools',
      skills: ['WebSockets', 'JWT Auth', 'Firebase Auth', 'SSR/ISR', 'Git', 'Jira', 'Docker (basic)', 'Vercel', 'AWS (basic)'],
    },
  ]

  return (
    <section id='skills' className='mt-24 scroll-mt-32 mb-32'>
      <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-gray-100'>My Skills</h2>
      <p className='mb-10 text-gray-600 dark:text-gray-400 mb-12 text-center'>
        Technologies and tools I work with
      </p>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className='p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition'
          >
            <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-4'>{group.title}</h3>
            <div className='flex flex-wrap gap-2'>
              {group.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-800 transition'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
