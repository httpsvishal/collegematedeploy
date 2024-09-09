import collegeData from "../assets/collegeData.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const CoursesOffered = ({ collegeId }) => {
    console.log(collegeData[collegeId].courses[0]);
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [window.location.hash]);
    return (
        <div className="courses-offered flex justify-center " id="courses">
            <div className="flex flex-col my-2 sm:my-5 py-2 sm:py-5 w-4/5 border rounded-md bg-white p-5 sm:p-10">
                <div className="text-xl font-semibold font-serif items-center text-start my-2 flex justify-between " >
                    <span>Courses offered by {collegeData[collegeId].name} </span> 
                    <div className='collegelogo m-2 border border-slate-400 rounded-md' style={{ width: '100px', height: '100px', overflow: 'hidden' }}>

                    <img 
                            src={collegeData[collegeId].logo}
                            alt={collegeData[collegeId].logo}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        </div>
                 </div>
                <div className="flex flex-col gap-5 ">
                    {collegeData[collegeId].courses.map((course, index) => {
                        return (
                            <div className="border rounded-lg p-2 sm:p-5 text-start " key={index} >
                                <h3 className="font-semibold text-xl" >{course.name}</h3>
                                <p className="mb-2 sm:mb-5">{course.courses} courses | {course.duration}
                                </p>
                                <hr />
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mt-2 sm:mt-5">
                                    <div>
                                        <h5 className="highlighted">Application Procedure</h5>
                                        <p className="truncate">{course.admission}</p>
                                    </div>
                                    <div>
                                    <h5 className="highlighted">Eligibility Criteria</h5>
                                        <p className="truncate">{course.admission}</p>
                                    </div>
                                    <div>
                                    <h5 className="highlighted">Average Palcement</h5>
                                        <p className="truncate">{course.avgplacement}</p>
                                    </div>
                                    <div>
                                    <h5 className="highlighted">Highest Package</h5>
                                        <p className="truncate">{course.highestpackage}</p>
                                    </div>
                                    <div>
                                        <Link to={"/apply"}>
                                        <button className="applynow w-1/1 rounded p-2">Apply Now </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default CoursesOffered;