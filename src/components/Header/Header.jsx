import React from 'react'
import Hearts from './Hearts';
import Rupees from './Rupees';

export const Header = ({ currentCategory, setCurrentCategory, player }) => {

  const categories = {
    adventure_log: {
      id: "adventure_log",
      label: "Adventure Log",
    },
    inventory: {
      id: "inventory",
      label: "Inventory"
    },
    system: {
      id: "system",
      label: "System"
    }
  };


  return (
    <header>
      <section>
        <Hearts currentHealth={player.stats.hearts} maxHearts={player.stats.maxHearts} />
      </section>
      <section className='flex flex-col gap-2 justify-center items-center'>
        <p className='text-2xl italic font-semibold'>{categories[currentCategory].label}</p>
        <ul className='flex gap-1'>
          {Object.keys(categories).map((key, index) => (
            <li className={`h-[8px] w-[8px] rounded-full ${key === currentCategory ? "bg-(--text-color)" : "bg-(--grey-bg)"}`}></li>
          ))}
        </ul>
      </section>
      <section>
        <Rupees totalRupees={player.stats.rupees} />
      </section>
    </header>
  )
}
