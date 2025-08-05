import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Button from "./Button"

const Form = () => {
    return (
        <form className="flex flex-col">
            <div className="flex flex-col gap-[20px] mb-[20px]" >
                <Input type="fullname" placeholder="Full Name" />
                <Input type="email" placeholder="Email Adress" />
                <div className="flex flex-col xl:flex-row gap-[20px]">
                    <Input type="phone" placeholder='Phone Number' />
                    <Select className="">
                        <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
                            <SelectValue placeholder='Select Your Requirement'></SelectValue>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Select Your Requirement</SelectLabel>
                                <SelectItem value="urgent-blood-donors-required">Urgent Blood Donors Required</SelectItem>
                                <SelectItem value="blood-donation-drive">Blood Donation Drive</SelectItem>
                                <SelectItem value="stem-cell-donor-registration-drive">Stem Cell Donor Registration Drive</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <Textarea className="h-[180px] resize-none rounded-none" placeholder="Enter your Message" />
                <Button  text="Send Message">
                    Send Message
                </Button>
            </div>
        </form>
    )
}

export default Form
