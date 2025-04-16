import React from 'react'
import { useAppSelector } from '@/redux/hook'

const SummaryList = () => {

    const summaryItems = useAppSelector((state)=> state.cart.items)

    console.log("summary", summaryItems);
  return (
    <div>
      {summaryItems.map((item, index) => (
        <div key={index}>
          <p>{item.name} - {item.size} - {item.total_qty} - {item.total_price}</p>
        </div>
      ))}
    </div>
  )
}

export default SummaryList