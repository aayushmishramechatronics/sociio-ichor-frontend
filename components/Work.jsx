import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri"
import PreTitle from "./PreTitle"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const workData = [
  {
    img: "/assets/img/work/marathon.jpg",
    name: "Manipal Marathon 2024",
    description: "Stem-Cell Donor Registration Drive in Collaboration with DKMS x BMST during Manipal Marathon saw 500+ Potential Donor Registrations, marking a Successful Campaign",
    date: "2024"
  },
  {
    img: "/assets/img/work/donation.jpg",
    name: "Blood Donation Drive",
    description: "Organized a Blood Donation Drive in Collaboration with NSS - MIT Manipal which saw more than 300+ Blood Donors",
    date: "2025"
  },
  {
    img: "/assets/img/work/donation2.jpg",
    name: "Manipal Marathon 2025",
    description: "Organized another Stem-Cell Donor Registration Drive in Collaboration with DKMS x BMST during Manipal Marathon saw 700+ Potential Donor Registrations, marking a Successful Campaign",
    date: "2025"
  },
]

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn("up", 0.2)} 
          initial='hidden' 
          whileInView="show" 
          viewport={{once: false, amount: 0.2}} 
          className="text-center max-w-[640px] mx-auto mb-16 xl:mb-20"
        >
          <PreTitle text="Our work" center />
          <h2 className="h2 mb-6">Gallery</h2>
          <p className="text-lg leading-relaxed max-w-[580px] mx-auto">
            Organizing and Collaborating with multiple Organizations to host Blood Donation Drives and Stem-Cell Donor Registration Drives across various Events and Campaigns.
          </p>
        </motion.div>

        <motion.div  
          variants={fadeIn("up", 0.3)} 
          initial='hidden' 
          whileInView="show" 
          viewport={{once: false, amount: 0.2}} 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10"
        >
          {workData.map((item, i) => (
            <div 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              key={i}
            >
              {/* Image Container */}
              <div className="relative h-[280px] xl:h-[320px] overflow-hidden">
                <Image 
                  src={item.img} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={item.name}
                  quality={100} 
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {item.date}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 xl:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <RiCheckboxCircleFill className="text-accent text-xl flex-shrink-0" />
                  <h3 className="text-xl xl:text-2xl font-primary font-bold text-primary leading-tight">
                    {item.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm xl:text-base">
                  {item.description}
                </p>

                {/* Action Button */}
                {item.href && (
                  <Link 
                    href={item.href} 
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg group/btn"
                  >
                    <span>View Details</span>
                    <RiArrowRightUpLine className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </Link>
                )}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </motion.div>


      </div>
    </div>
  )
}

export default Work
