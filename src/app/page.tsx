"use client"
import Image from 'next/image'
import DivHabits from './components/DivHabits/DivHabits'

export default function Home() {

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const habits = {
    "beber-Agua": {
      "2024-28-01": true,
      "2024-28-02": false,
      "2024-28-03": false,
      "2024-28-04": false,
      "2024-28-05": false,
    },
    "estudar programacao": {
      "2024-28-01": true,
      "2024-28-02": false,
      "2024-28-03": false,
      "2024-28-04": false,
      "2024-28-05": false,
    }
  }
  return (
    <main>
      {habits === null || Object.keys(habits).length === 0 ? (
        <h1 className="mt-20 text-4xl font-light text-white text-center gap-8 pt-16 px-4">
          você não tem hábitos cadastrados
        </h1>
      ) : Object.entries(habits).map(([habit, data]) => (
        <div key={habit} >
          <div className='flex justify-between items-center mt-4 mb-4'>
            <span className='font-light text-xl text-white '>{habit}</span>
            <Image src={'/images/frame.png'} alt='Logo-meta diaria' width={20} height={20} />
          </div>
          <div className=' bg-neutral-800 pt-4'>
            {weekDays.map(
              (days) => (
                <span key={days} className='text-white p-6 font-sans text-center' >{days}</span>
              ))}

          </div>
          <div className=' bg-neutral-800 flex gap-10 p-6 text-center  '>
            {weekDays.map(() => (
              <DivHabits day={true} />
            )
            )}
          </div>

        </div>

      ))}
    </main>
  )
}
