import Lottie from "lottie-react";
import confused from "../assets/confused.json";
import { Label, TextInput } from "flowbite-react";
import ApplyNow from "./ApplyButton";
import { useState } from "react";

const StillConfused = () => {
    const [confusedform, setConfusedForm] = useState({
        name: "",
        email: "",
        phNumber: ""
    });
    const handleChange = (e) => {
        setConfusedForm({
            ...confusedform,
            [e.target.name]: e.target.value,
        });
        console.log(confusedform);
    };
    return (
        <div className="still-confused grid sm:grid-cols-5">
            <div className="col-span-2">
                <Lottie animationData={confused} />
            </div>
            <div className="still-confused__container flex justify-center items-center col-span-3 mb-5 sm:mb-0">
                <div className="w-full">
                    <h2 className="still-confused__heading text-3xl font-semibold my-14">Still Confused?</h2>
                    <form className="flex w-full items-center flex-col gap-4">
                        <div className="w-4/5 md:w-1/2">
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput onChange={handleChange} id="email" name="email" type="email" placeholder="name@gmail.com" required shadow className="w-full" />
                        </div>
                        <div className="w-4/5 md:w-1/2">
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="name" />
                            </div>
                            <TextInput onChange={handleChange} id="name" name="name" type="text" placeholder="Your Name" required shadow />
                        </div>
                        <div className="w-4/5 md:w-1/2">
                            <div className="mb-2 block">
                                <Label htmlFor="phnumber" value="Phone Number" />
                            </div>
                            <TextInput onChange={handleChange} id="phnumber" name="phNumber" type="text" placeholder="Your Phone Number" required shadow />
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    terms and conditions
                                </Link>
                            </Label>
                        </div> */}
                        <ApplyNow formData={confusedform} form = "confused" />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default StillConfused;