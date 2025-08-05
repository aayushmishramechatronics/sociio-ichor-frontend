"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs"
import Link from "next/link"

import { Heart, Bot } from "lucide-react"
import Image from "next/image"
import PreTitle from "./PreTitle"
import Button from "./Button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const serviceData = [
  {
    name: "donor registration",
    icon: <Heart className="h-9 w-9" fill="currentColor" />,
    title: "Become a Blood Donor",
    description: "Almost Every Week at KMC Blood Bank, we get a news of shortage of blood - and to help avoid such critical situations, we developed a platform where-in students can register as a donor and help donate blood, thus saving a life.",
    serviceList: [
      "Register as a Blood Donor",
      "Donate Blood Voluntarily",
      "Help Save a Life",
      "Visit KMC for More Details"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
    externalLink: "https://ivr-caller-system.onrender.com/",
    buttonText: "Visit Website"
  },
  {
    name: "ask sociio ai",
    icon: <Bot className="h-9 w-9" />,
    title: "Sociio AI",
    description: "Get instant answers about blood donation procedures, safety guidelines, and donation requirements. Our AI assistant helps you learn everything you need to know about safe blood donation practices and connects you with donation opportunities.",
    serviceList: [
      "Learn about Blood Donation Procedures",
      "Get useful Information about the When, Where and Hows of Donating Blood",
      "Teach others about Safe Blood Donation Practices",
      "Stay Informed"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
    externalLink: "https://sociioichor.onrender.com/",
    buttonText: "Visit Website"
  },
]

const fadeInVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } }
}

const Services = () => {
  const [activeTab, setActiveTab] = useState("donor registration")
  
  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView="show" viewport={{ once: false, amount: 0.2 }} className="text-center max-w-[540px] mx-auto mb-20">
          <PreTitle text={"Sociio Ichor Platforms"} center />
          <h2 className="h2 mb-3">Explore Our Other Platforms</h2>
          <p className="mb-11 max-w-[480px] mx-auto">Educating the People about Blood Donation, Promoting Safe Blood Donation Practices and Encouraging Student Innovation - All through Our Organization.</p>
        </motion.div>
        <motion.div variants={fadeIn("up",0.3)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}}>
          <Tabs defaultValue="donor registration" onValueChange={(value) => setActiveTab(value)} className="flex flex-col xl:flex-row gap-[30px]">
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full! rounded-none p-0 bg-transparent xl:w-[345px]!">
              {serviceData.map((item) => (
                <TabsTrigger key={item.name} value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow p-0 outline-none">
                  <div className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 
                ${activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"}`
                  }>
                    <div>
                      {item.icon}
                    </div>
                  </div>
                  <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 bg-white shadow h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div variants={fadeInVariants} initial='hidden' whileInView="show" exit="hidden" className="flex flex-col md:flex-row gap-[30px]">
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, i) => (
                        <div
                          key={i}
                          className="relative w-[140px] h-[140px] xl:w-[200px] xl:h-[200px]"
                        >
                          <Image
                            src={thumb.url}
                            fill
                            alt=""
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, i) => (
                            <li key={i} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">{service}</div>
                            </li>
                          ))}
                        </ul>
                        {/* External link button */}
                        <Link href={item.externalLink} target="_blank" rel="noopener noreferrer">
                          <Button text={item.buttonText} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
