import Navbar from "../components/Navbar";
import Colleges from "../components/Colleges";
import FooterComp from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";

const AllColleges = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        <div>
            <Navbar />   
            <SearchBar /> 
            <Colleges />
            <FooterComp />
        </div>
    )
}       

export default AllColleges;