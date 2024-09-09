import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyCollege from "../components/whyCollege.jsx";
import Courses from "../components/Courses.jsx";
import VideoCall from "../components/VideoCall.jsx";
import TopColleges from "../components/TopColleges.jsx";
import StillConfused from "../components/StillConfused.jsx";
import FooterComp from "../components/Footer.jsx";
import ApplyNow from "../components/ApplyButton.jsx";
import { Label, TextInput } from "flowbite-react";

const Homepage = ({collegeData,setCollegeData}) => {
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
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDialog(true);
            console.log("Dialog shown");
        }, 5000); // Show dialog after 5 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const closeDialog = () => {
        setShowDialog(false);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        <>
            <Navbar />
            <Hero collegeData={collegeData} setCollegeData={setCollegeData} />
            <WhyCollege />
            <Courses />
            <VideoCall />
            <TopColleges />
            <StillConfused />
            <FooterComp />
            {showDialog && (
                <div className="dialog-overlay w-full">
                    <div className="dialog-box w-2/3">
                        <form className="flex w-full items-center flex-col gap-4">
                            <h2 className="still-confused__heading text-3xl highlighted font-semibold my-2"> Need College Assistance?</h2>
                            <div className='sm:hidden'>
                                <div className='flex gap-12'>
                                    <img src='https://img.freepik.com/premium-vector/24-7-icon-24-hours-7-days-week-service-always-open-icon-vector-illustration_570092-884.jpg' className='h-12 border rounded p-2'></img>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/004/572/118/small/economy-line-icon-logo-illustration-free-vector.jpg" className='h-12 border rounded p-2' alt="" />
                                </div>
                                <div className='flex gap-12'>
                                    <img src="https://static.vecteezy.com/system/resources/previews/025/400/222/original/three-way-direction-arrow-icon-road-direction-sign-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-vector.jpg" className='h-12 border rounded p-2' alt="" />
                                    <img src="https://static.vecteezy.com/system/resources/previews/021/376/848/non_2x/flyer-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" className='h-12 border rounded p-2' alt="" />
                                </div>
                            </div>
                            <div className='flex w-full gap-5 justify-between'>
                                <div className='flex flex-col gap-5 hidden sm:block  items-center'>
                                    <div className='flex gap-5'>
                                        <div className='flex w-1/2 flex-col items-center justify-center'>
                                        <img src='https://img.freepik.com/premium-vector/24-7-icon-24-hours-7-days-week-service-always-open-icon-vector-illustration_570092-884.jpg' className='h-20 border rounded p-2'></img>
                                        <p className='text-center highlighted font-semibold'>24/7 Support</p>
                                        </div>
                                        <div className='flex w-1/2 flex-col items-center justify-center'>
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/572/118/small/economy-line-icon-logo-illustration-free-vector.jpg" className='h-20 border rounded p-2' alt="" />
                                        <p className='text-center highlighted font-semibold'>Fees Information</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className='flex w-1/2 flex-col items-center justify-center'>
                                        <img src="https://static.vecteezy.com/system/resources/previews/025/400/222/original/three-way-direction-arrow-icon-road-direction-sign-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-vector.jpg" className='h-20 border rounded p-2' alt="" />
                                        <p className='text-center highlighted font-semibold'>Career Guidance</p>
                                        </div>
                                        <div className='flex w-1/2 flex-col items-center justify-center'>
                                        <img src="https://static.vecteezy.com/system/resources/previews/021/376/848/non_2x/flyer-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" className='h-20 border rounded p-2' alt="" />
                                        <p className='text-center highlighted font-semibold'>College Information</p>
                                        </div>
                                    </div>

                                </div>
                                <div className=' w-full flex flex-col items-center sm:w-3/5'>
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
        </>
    );
}

export default Homepage;