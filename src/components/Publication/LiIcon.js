import React from 'react'
import {motion, useScroll} from "framer-motion"
import "./index.css"

function LiIcon({reference}) {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
    <>
        <figure className='line-circle absolute left-0 stroke-black'>
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-red-600 stroke-2 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-white'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10" className='fill-red-600 stroke-none' />
            </svg>
        </figure>
    </>
  )
}

export default LiIcon