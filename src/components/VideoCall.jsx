import Lottie from "lottie-react";
import videoCall from "../assets/videocall.json";
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Label,TextInput } from "flowbite-react";
import ApplyNow from "./ApplyButton";
import vc from "../assets/vc.json"

const VideoCall = () => {
    const [showDialog, setShowDialog] = useState(false);
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
    const handleClick = () =>{
        setShowDialog(true)
    }
    const closeDialog = () => {
        setShowDialog(false);
    };
    return (
        <div className="videoCall">
            <div className="videoCall__content flex items-center grid sm:grid-cols-5 p-2 sm:p-5 justify-around">
                <div className="videoCallimg col-span-2">
                    <Lottie animationData={videoCall} />
                </div>
                <div className="videoCall-discription sm:col-span-3 p-10 flex flex-col items-center">
                    <div>
                        <h1 className="text-3xl font-semibold highlighted">Book a Video Call</h1>
                        <p className="my-2 text-lg">Book a video call with our expert for personalized guidance. Let us help you navigate your educational journey with 
                            confidence.</p>
                        <p className="my-4 mb-14 text-base font-normal">You can schedule a video call with one of our experts to receive personalized guidance tailored to your 
                            academic and career goals. Whether you need help choosing the right college, understanding admission requirements, or exploring career options, 
                            our experienced counselors are here to support you every step of the way. Book your session today and take the first step towards a brighter 
                            future.
                        </p>
                        <Button variant="outlined" className="mt-14" color="black" onClick={handleClick} >Book a Video Call</Button>
                    </div>
                </div>
            </div>
            {showDialog && (
                <div className="dialog-overlay w-full">
                    <div className="dialog-box w-2/3">
                    <h2 className="still-confused__heading text-3xl highlighted font-semibold my-2">Book a Video Call </h2>
                        <form className=" items-center flex-col gap-4">
                            
                            <div className='grid sm:grid-cols-2 gap-5 '>
                                <div className='flex flex-col gap-5  items-center'>
                                    
                                    <Lottie animationData={vc}
                                        className=""     
                                    />

                                </div>
                                <div className=' w-full flex flex-col items-center '>
                                    <div className="w-4/5 sm:w-full">
                                        <div className="mb-2 block">
                                            <Label htmlFor="Name" value="Name" />
                                        </div>
                                        <TextInput onChange={handleChange} id="name" name="name" type="text" placeholder="Your Name" required shadow />
                                    </div>
                                    <div className="w-4/5 sm:w-full">
                                        <div className="mb-2 block">
                                            <Label htmlFor="phnumber" value="Phone Number" />
                                        </div>
                                        <TextInput onChange={handleChange} id="phnumber" name="phNumber" type="text" placeholder="Your Phone Number" required shadow />
                                    </div>
                                    <div className="w-4/5 sm:w-full">
                                        <div className="mb-2 block">
                                            <Label htmlFor="email" value="Your email" />
                                        </div>
                                        <TextInput onChange={handleChange} id="email" name="email" type="email" placeholder="name@gmail.com" required shadow className="w-full" />
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
                                    <ApplyNow formData={confusedform} form="confused" />
                                    <button onClick={closeDialog} className='mt-2 sm:mt-3'><u>Close</u></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    )
}
export default VideoCall;