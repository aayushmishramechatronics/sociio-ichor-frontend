"use client"

import { RiArrowUpLine } from "react-icons/ri"
import { Link as ScrollLink } from "react-scroll"
import Logo from "./Logo"
import NavMobile from "./NavMobile"

const links = [
  {
    name: "home",
    path: "home"
  },
  {
    name: "about",
    path: "about"
  },
  {
    name: "explore",
    path: "services"
  },
  {
    name: "gallery",
    path: "projects"
  },
  {
    name: "contact",
    path: "contact"
  }
]

const Header = () => {
  return (
    <header className="bg-primary py-4 sticky">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-12">
            {/* Navigation Links */}
            <ul className="flex">
              {links.map((link, i) => (
                <li
                  key={i}
                  className="text-white text-sm uppercase font-primary font-medium 
                  tracking-[1.2px] after:content-['/'] after:mx-4 
                  last:after:content-none after:text-accent"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    className="cursor-pointer"
                    activeClass="text-accent"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Register as Donor Button with External Link */}
            <a
              href="https://ivr-caller-system.onrender.com/register"  
              target="_blank"                      
              rel="noopener noreferrer"            
            >
              <button
                className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[10px] flex items-center 
                justify-between min-w-[200px] bg-white group"
              >
                <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                  Register as Donor
                </div>
                <div className="w-11 h-11 bg-primary flex items-center justify-center">
                  <RiArrowUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200 " />
                </div>
              </button>
            </a>
          </nav>

          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
