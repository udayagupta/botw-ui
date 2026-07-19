import React from 'react'

const Rupees = ({ totalRupees }) => {
  return (
    <div className='rupees text-xl italic flex gap-2 items-center'>
        <img src='./inventory_rupees_icon.svg' className='h-[25px]'/>
        <p>{totalRupees.toLocaleString("en-US")}</p>
    </div>
  )
}

export default Rupees