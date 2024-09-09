import Navbar from "../components/Navbar";
import FooterComp from "../components/Footer";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CollegeThumbnail from "../components/CollegeThumbnail";
import CollegeOverview from "../components/CollegeOverview";
import CoursesOffered from "../components/CoursesOffered";
import { useEffect } from "react";

const Collegepage = () => {
    const { collegeId } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        <div>
            <Navbar />    
            <SearchBar />
            <CollegeThumbnail collegeId={collegeId} />
            <CollegeOverview collegeId={collegeId} />
            <CoursesOffered  collegeId={collegeId-1} />
            <FooterComp />
            
        </div>
    )
}

export default Collegepage;


