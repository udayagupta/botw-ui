import React from 'react'
import Hearts from './Hearts';
import Rupees from './Rupees';
import AnimateCategorySlider from '../AnimateCategorySlider/AnimateCategorySlider';

export const Header = ({ currentCategory, setCurrentCategory, player, slideDirection, setSlideDirection }) => {

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

  const handleCategory = (newCategoryKey, newIndex) => {
    const categoryOrder = ["adventure_log", "inventory", "system"];
    const prevIndex = categoryOrder.indexOf(currentCategory);

    if (newIndex > prevIndex) setSlideDirection(1);
    if (newIndex < prevIndex) setSlideDirection(-1);

    setCurrentCategory(newCategoryKey);
  }


  return (
    <header className='relative flex justify-between items-center w-full'>
      <section className=''>
        <Hearts currentHealth={player.stats.hearts} maxHearts={player.stats.maxHearts} />
      </section>

      <section className='flex absolute left-1/2 -translate-x-1/2  flex-col gap-2 justify-center items-center'>
        <AnimateCategorySlider slideDirection={slideDirection} currentCategory={currentCategory}>
          <p className='text-[28px] italic relative font-semibold'>{categories[currentCategory].label}</p>
        </AnimateCategorySlider>
        <ul className='flex gap-1'>
          {Object.keys(categories).map((key, index) => (
            <li key={index} onClick={() => handleCategory(key, index)} className={`h-[7px] w-[7px] cursor-pointer rounded-full ${key === currentCategory ? "bg-(--text-color)" : "bg-(--grey-bg)"}`}></li>
          ))}
        </ul>
      </section>

      <section className=''>
        <Rupees totalRupees={player.stats.rupees} />
      </section>
    </header>
  )
}
