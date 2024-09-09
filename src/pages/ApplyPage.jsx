import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import { useEffect } from "react";

const ApplyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        <div>
            <Navbar />
            <ApplyForm />
            <Footer />
        </div>
    );
};

export default ApplyPage;