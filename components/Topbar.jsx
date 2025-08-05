import { RiMailFill, RiPhoneFill } from "react-icons/ri"
import Socials from "./Socials"

const Topbar = () => {
  return (
    <section id="home" className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#cc0000] to-[#ff4444] flex items-center overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Moving text banner */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-white font-semibold text-lg mx-8">
                ⬛ Donate Blood, Save Lives - Every Drop Counts!
              </span>
              <span className="text-white font-semibold text-lg mx-8">
                ⬛ Urgent Blood-Donation Required? Call +91-8424966294
              </span>
              <span className="text-white font-semibold text-lg mx-8">
                🤍 Join Sociio's Blood Donation Drive - Register Today!
              </span>
              <span className="text-white font-semibold text-lg mx-8">
                🤍 Be a Hero - Become a Blood Donor
              </span>
              <span className="text-white font-semibold text-lg mx-8">
                ⬛ Donate Blood, Save Lives - Every Drop Counts!
              </span>
              <span className="text-white font-semibold text-lg mx-8">
                ⬛ Urgent Blood-Donation Required? Call +91-8424966294
              </span>
            </div>
          </div>
          
          {/* Contact info - hidden on mobile, shown on larger screens */}
          <div className="hidden xl:flex items-center gap-8 min-w-fit">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-primary flex items-center justify-center rounded">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-white">+91-8424966294</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-primary flex items-center justify-center rounded">
                <RiMailFill />
              </div>
              <p className="font-medium text-white">sociio_ichor@gmail.com</p>
            </div>
          </div>
          
          {/* Social links */}
          <Socials containerStyles="flex items-center gap-4 mx-auto xl:mx-0 min-w-fit" iconsStyles="text-white hover:text-white/80"/>
        </div>
      </div>
      
      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Topbar
