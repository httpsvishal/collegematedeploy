import React from "react";
import Lottie from "lottie-react";
import confirm from "../assets/confirm.json";
import  Navbar  from "../components/Navbar";
import  Footer  from "../components/Footer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SuccesPage = () => {
    return (
        <>
            <Navbar />
            <div className="text-center mt-5">
                <h1 className="font-semibold text-2xl mt-11 mb-6">
                Submission Complete 
                </h1>
                <div className="confirmp flex justify-center">
                    <p>
                    Thank you for your submission! Our team will reach out to you soon.
                    </p>
                </div>
            </div>
            <div className="confirm flex justify-center items-center">
                <Lottie animationData={confirm} style={{ width: "400px" }} loop={false} />
            </div>
            <div className="flex download justify-center mb-8">
                <Link to={"/colleges"} >
                <Button
                    variant="contained"
                    size="large" style={{ width: "100%", height: "50px", color: "white", backgroundColor: "black" }}
                    className="applynow"
                >
                    Find More Colleges
                </Button>
                </Link>
            </div>
            <Footer />
        </>
    )
};

export default SuccesPage;