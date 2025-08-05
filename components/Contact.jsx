import { RiChat1Line,  RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri"
import Socials from "./Socials"
import Form from "./Form"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const Contact = () => {
  return (
    <div className='pt-16 xl:pt-32' id='contact'>
      <motion.div  variants={fadeIn("up",0.1)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]" >
              <h4 className="text-[26px] font-primary font-bold mb-6 ">Contact Us</h4>
              <p className="mb-9">Reach Out to our Group of Experienced Volunteers. We're available 24/7 to provide all the help, be it Urgent Blood Donation, Donor Registration Drive, Donation Camps or anything else.</p>
              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent"/>
                  </div>
                  <div className="">
                    <h5 className="text-[22px] font-semibold font-primary leading-none">Connect with Us</h5>
                    <p className="mb-4">Our Team is Here to Help.</p>
                    <p className="font-semibold text-primary">sociio_ichor_manipal@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent"/>
                  </div>
                  <div className="">
                    <h5 className="text-[22px] font-semibold font-primary leading-none">Location</h5>
                    <p className="mb-4">Where all Work Happens</p>
                    <p className="font-semibold text-primary">MIT Manipal - Innovation Center AB-4, Manipal - 576104</p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent"/>
                  </div>
                  <div className="">
                    <h5 className="text-[22px] font-semibold font-primary leading-none">Contact Hours</h5>
                    <p className="mb-4">Monday - Saturday</p>
                    <p className="font-semibold text-primary">+91 84249 66294</p>
                  </div>
                </div>
              </div>
              <Socials containerStyles="flex gap-[40px]" iconsStyles="text-primary text-[20px]"/>
            </div>
            <div className="flex-1">
              <h2 className="h2 mb-3">Want to Organize a Donation Drive? </h2>
              <p className="mb-9">
                Share your Details Below and Our Team will Reach Out to You within 24 Hours.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
