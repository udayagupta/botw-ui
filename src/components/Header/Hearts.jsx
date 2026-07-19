import React from 'react'
import { HeartIcon } from '../Icons/HeartIcon';

const Hearts = ({ currentHealth, maxHearts }) => {
  const fullHearts = parseInt(currentHealth);
  const partialHeart = currentHealth - parseInt(currentHealth) === 0 ? null : currentHealth - parseInt(currentHealth);
  const emptyHearts = maxHearts - Math.ceil(currentHealth);

  const heartsArray = [...Array(fullHearts).fill(1), partialHeart, ...Array(emptyHearts).fill(0)];

  return (
    <div>
      <ul className="grid grid-cols-10 w-fit w-max row-gap-[1px] items-center ">
        {heartsArray.map((amount, index) => {
          return (amount !== null && (
            <li key={index} className="m-[1px]">
              <HeartIcon amount={amount} size={18}/>
            </li>
          ))
        })}
      </ul>
    </div>
  )

}

export default Hearts