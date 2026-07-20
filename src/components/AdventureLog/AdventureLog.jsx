import React, { useState } from 'react'
import { CategoryIcon } from './CategoryIcon';

const AdventureLog = ({ activeQuests }) => {
  const activeMainQuests = "";
  const shrineQuests = "";
  const sideQuests = "";

  const [currentCategory, setCurrentCategory] = useState("main_quests");

  const categories = {
    main_quest: {
      id: "main_quests",
      label: "Main Quest"
    },
    shrine_quests: {
      id: "shrine_quests",
      label: "Shrine Quests"
    },
    side_quests: {
      id: "side_quests",
      label: "Side Quests"
    },
    memories: {
      id: "memories",
      label: "Memories"
    },
  }

  return (
    <div className='flex'>
      <div className='flex-1 flex flex-col items-center'>
        <ul className='quest-menu flex gap-5'>
          {Object.keys(categories).map((category, index) => (
            <li className='relative category flex flex-col items-center gap-3'>
              <p className='absolute w-max text-lg tracking-wide h-[20px] font-semibold italic'>{currentCategory === category ? categories[category].label : ""}</p>
              <CategoryIcon className={"my-auto mt-8"} category={category} active={category === currentCategory}/>
            </li>
          ))}
        </ul>
        <ul className='quest-list'>
          <li></li>
        </ul>
      </div>
      <div style={{background: `rgba(0, 0, 0, 30%)`}} className='quest-info  my-10 flex-1 py-5 h-full'>
        
      </div>
    </div>
  )
}

export default AdventureLog