import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
import SliderBtns from "./SliderBtns"
const Slider = () => {
    return (
        <Swiper className="bg-white shadow w-full max-w-[630px] h-[200px]">
            <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">Sociio Ichor has been One of the Best Student-Run Organizations of MIT Manipal. They have shown Utmost Dedication and Complete Devotion towards their Work!</p>
                        <p className="font-primary font-semibold text-primary">Prateek Shewkani</p>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">No one does it Better than Sociio Ichor when it comes to Collaborative Teamwork and Organizing Donation Drives!</p>
                        <p className="font-primary font-semibold text-primary">Manorath Khanna</p>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">We're Very Proud of Team Sociio Ichor!</p>
                        <p className="font-primary font-semibold text-primary">Insha Manowar</p>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">Sociio Ichor as an Organization has Created an Immensly Positive Impact on Everyone's Lives and we couldn't be More Thankful to Them!</p>
                        <p className="font-primary font-semibold text-primary">Himanshi Khurana</p>
                    </div>
                </div>
            </SwiperSlide>
            <SliderBtns />
        </Swiper>
    )
}

export default Slider
