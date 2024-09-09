import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import ApplyNow from "./ApplyButton";


const ApplyForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phNumber: "",
        address: "",
        course: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData);
    };
    return (
        <main className="max-w-[1250px] mx-auto flex justify-center text-base gap-5 p-3 m-3">
            <div className="w-3/5">
                <h2 className="text-2xl font-semibold  ">Contact Details</h2>
                <p className="my-5  font-semibold">
                    Share your Details
                </p>
                <div className="contactinfo box rounded-xl border p-7 border-black mb-5">

                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div>
                            <TextField
                                label="First Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }}
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Last Name"
                                margin="normal"
                                variant="outlined"
                                required
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }}
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} // Increase input text size
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }} // Increase label text size
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Address"
                                margin="normal"
                                variant="outlined"
                                required
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: 16, color: "black" } }} // Increase input text size
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }} // Increase label text size
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Phone Number"
                                margin="normal"
                                variant="outlined"
                                required
                                name="phNumber"
                                value={formData.phNumber}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {formData.phoneCode}
                                        </InputAdornment>
                                    )
                                    , style: { fontSize: 16, color: "black" }
                                }}
                                InputLabelProps={{ style: { fontSize: 16, color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8', // Change border color
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black', // Change border color when focused
                                        },
                                    }
                                }} />
                        </div>
                        <div>
                            <TextField
                                label="Course"
                                margin="normal"
                                variant="outlined"
                                required
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                InputProps={{ style: { fontSize: "14px", color: "black" } }}
                                InputLabelProps={{ style: { fontSize: "14px", color: "black" } }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A8A8A8',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black',
                                        },
                                    }
                                }} />
                        </div>
                    </div>

                </div>
                <ApplyNow formData ={formData} form = "apply" />
                {/* <p className="my-3 text-red-500">
                    <span className="font-semibold text-stone-950">Note:</span> Each candidate must carry their ID card at the time of visit.
                </p> */}
                {/* <div >
                    <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </div> */}
            </div>
        </main>
    )
};

export default ApplyForm;