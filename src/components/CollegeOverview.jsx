import collegeData from "../assets/collegeData.json";

const CollegeOverview = ({collegeId}) => {
    return (
        <div id="overview" className="flex  flex-col items-center py-5 sm:py-10 gap-5 college-overview  mt-5 justify-center">
            <div className="w-4/5 border rounded-md bg-white p-5 sm:p-10">
                <h1 className="text-4xl mt-3 mb-5 sm:mb-10 font-semibold font-serif">Overview</h1>
                <p className=" text-lg text-start">{collegeData[collegeId-1].intro}</p>
            </div>
            <div className="w-4/5 border rounded-md bg-white p-5 sm:p-10">
                <p className=" text-lg text-start">{collegeData[collegeId-1].intro2}</p>
            </div>
        </div>

    );
}

export default CollegeOverview;