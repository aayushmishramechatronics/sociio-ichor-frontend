import Link from "next/link"

import { RiInstagramFill, RiYoutubeFill, RiFacebookFill } from "react-icons/ri"


const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/sociio_ichor/"
    },
    {
        icon: <RiYoutubeFill />,
        path: "https://www.youtube.com/watch?v=qTxhv0wQNgo"
    },
    {
        icon: <RiFacebookFill />,
        path: "https://facebook.com"
    }
]
const Socials = ({containerStyles,iconsStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {socials.map((item,index) => (
                <Link href={item.path} target="_blank" key={index} className={`${iconsStyles}`}>
                    {item.icon}
                </Link>
            )) }
        </div>
    )
}

export default Socials
