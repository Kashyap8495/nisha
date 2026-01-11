'use client'
export default function Stats() {
  const stats = [
    { value: '1.7+', label: 'Years Experience' },
    { value: '7+', label: 'Projects Completed' },
    { value: '2', label: 'Professional Roles' },
    { value: '100%', label: 'Quality Commitment' },
  ]

  return (
    <section className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6'>
      {stats.map((s) => (
        <div
          key={s.label}
          className='p-6 text-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition'
        >
          <div className='text-3xl font-bold text-purple-600 dark:text-purple-400'>{s.value}</div>
          <div className='text-sm text-gray-600 dark:text-gray-300 mt-1'>{s.label}</div>
        </div>
      ))}
    </section>
  )
}
