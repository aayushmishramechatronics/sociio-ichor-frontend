import { motion } from "framer-motion";
import FaqItem from "./FaqItem";
import PreTitle from "./PreTitle";
import { fadeIn } from "@/variants";

const Faq = () => {
  const faqItemsData = [
    {
      title: "Who can Donate Blood and What are the Eligibility Criterias?",
      descripton: "Healthy Individuals Aged 18-65, Weighing At-Least 50kg, with Normal Blood Pressure and Haemoglobin Levels can Donate. You must be free from Infections and Not have Donated Blood in the Last 3 Months.",
    },
    {
      title: "How Often can I Donate Blood Safely?",
      descripton: "Men can donate every 3 months (4 times a year) and women can donate every 4 months (3 times a year). This gap allows your body to replenish the donated blood components completely.",
    },
    {
      title: "Is Blood Donation Safe? What are the Risks?",
      descripton: "Blood Donation is Completely Safe when Done at Certified Centers. We use Sterile, Single-Use Needles and Follow Strict Safety Protocols. Minor Side-Effects like Dizziness are Rare and Temporary.",
    },
    {
      title: "How long does the Blood Donation Process take?",
      descripton: "The entire process takes 45-60 Minutes, including Registration, Medical Screening, and Donation. The actual Blood Collection takes only 8-10 Minutes.",
    },
    {
      title: "What Should I do Before and After Donating Blood?",
      descripton: "Before: Eat a Healthy Meal, Drink Plenty of Water, and Get Adequate Sleep. After: Rest for 10-15 Minutes, Drink Fluids, Avoid Heavy Lifting for 24 Hours, and Eat Iron-rich Foods.",
    },
    {
      title: "Can I Donate Blood if I'm on Medication?",
      descripton: "It Depends on the Medication. Common Medications like Vitamins and Blood Pressure Pills are usually Acceptable. However, Antibiotics, Blood Thinners, and certain other Medications may require a Waiting Period.",
    }
  ];

  const faqItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3 }
    })
  }

  return (
    <div className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div variants={fadeIn("up",0.2)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="text-center max-w-[540px] mx-auto xl:mb-20">
          <PreTitle text="FAQ" center />
          <h2 className="h2 mb-2">Got Questions About Blood Donation?</h2>
          <p className="mb-11 max-w-[480px] mx-auto">From Eligibility Requirements to Donation Process, We've Answered the Most Common Questions to Help you Become a Confident Blood Donor.</p>
        </motion.div>
        <ul className="w-full flex flex-col">
            {faqItemsData.map((item,index) => (
               <motion.li key={index} variants={faqItemVariants} initial='hidden' whileInView="visible" viewport={{once:false,amount:0.8}} custom={index}>
                <FaqItem title={item.title} description={item.descripton} />
               </motion.li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq
