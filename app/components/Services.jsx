'use client'
import { FaReact, FaServer, FaCogs } from 'react-icons/fa'

export default function Services() {
  const list = [
    {
      icon: <FaReact size={28} className='text-purple-600' />,
      title: 'Frontend Development',
      desc: 'Building fast, responsive UIs using React, Next.js, Tailwind CSS, MUI, and Ant Design.',
    },
    {
      icon: <FaServer size={28} className='text-purple-600' />,
      title: 'Backend Development',
      desc: 'Developing scalable APIs with Node.js, Express, REST, and GraphQL with a focus on performance.',
    },
    {
      icon: <FaCogs size={28} className='text-purple-600' />,
      title: 'Real-Time Systems & SaaS',
      desc: 'Implementing WebSockets, live dashboards, automation workflows, and production-ready SaaS features.',
    },
  ]

  return (
    <section id='services' className='mt-20 text-center scroll-mt-32'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>What I Do</h2>
      <p className='mb-10 text-gray-600 dark:text-gray-400 mb-12'>
        Delivering high-quality solutions tailored to your needs
      </p>

      <div className='grid md:grid-cols-3 gap-6'>
        {list.map((s) => (
          <div
            key={s.title}
            className='p-8 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl transition shadow-sm hover:shadow-md'
          >
            <div className='mb-4 flex justify-center'>{s.icon}</div>
            <h3 className='text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100'>{s.title}</h3>
            <p className='text-sm text-gray-600 dark:text-gray-300'>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
