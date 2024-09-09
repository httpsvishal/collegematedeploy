import React from "react";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const ApplyNow = ({ formData,form }) => {
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();
        let templateParams={};
        let templateId = '';
        if(form==="apply"){
            templateParams = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phNumber: formData.phNumber,
                address: formData.address,
                course: formData.course,
                to_name: 'CollegeMate India',
            };
            templateId = 'template_rnrbam8';
        }
        if (form==="confused"){
            templateParams = {
                name: formData.name,
                email: formData.email,
                phNumber: formData.phNumber,
                to_name: 'CollegeMate India'
            }
            templateId = 'template_kf7kiyh'
        }

        const serviceId = 'service_srw7f9y';
        
        const userId = 'DX_BuL4uTsfcZVGV7';
        if(form==="confused"&&formData.name !== "" &&formData.email !== "" && formData.phNumber !==""){
            emailjs.send(serviceId, templateId , templateParams, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                navigate('/success');
            }, (error) => {
                console.log('FAILED...', error);
            });
        }
        else if(form==="apply"&&formData.firstName !== "" &&formData.lastName !== "" && formData.email !== "" && formData.phNumber !=="" && formData.address !=="" && formData.course !==""){
            emailjs.send(serviceId, templateId , templateParams, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                navigate('/success');
            }, (error) => {
                console.log('FAILED...', error);
            });
        }
        else{
            alert("Please fill all the details");
        }
    };
    return (
        <div className="flex justify-center mt-2">
            <button
                className="applynow font-semibold py-2 px-4 rounded"
                onClick={sendEmail}

            >
                Apply Now
            </button>
        </div>
    );
};

export default ApplyNow;    