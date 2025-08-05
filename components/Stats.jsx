"use client"
import { useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"

const statsData = [
  {
    endCountNum: 1500,
    endCountText: "+",
    text: "Lives Impacted Positively!"
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Donor Registration Programmes Organized"
  },
  {
    endCountNum: 25,
    endCountText: "+",
    text: "Blood Donation Drives Organized"
  },
  {
    endCountNum: 5,
    endCountText: "+",
    text: "Years of Helping Save Lives!"
  }
]

const Stats = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2 })
  
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
          {statsData.map((item, i) => (
            <div className="w-full" key={i}>
              <div className="text-5xl font-semibold">
                {inView && (
                  <CountUp start={0} end={item.endCountNum} delay={0.5} duration={3} />
                )}
                <span>{item.endCountText}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
