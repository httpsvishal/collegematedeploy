import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CollegeData from "../assets/collegeData.json";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const CollegeThumbnail = ({ collegeId }) => {
    return (
        <div className="flex my-5 justify-center">
            <div className="w-4/5 border rounded">
                <h1 className="text-6xl my-3 font-semibold highlighted text-center">{CollegeData[collegeId - 1].name}</h1>
                <div className="flex justify-center">
                    <ImageList
                        sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
                    >
                        <ImageListItem>
                            <img
                                src={CollegeData[collegeId - 1].thumbnail}
                                alt={CollegeData[collegeId - 1].name}
                            />
                        </ImageListItem>
                    </ImageList>
                </div>
                <hr />
                <div className='flex'>
                    <div className='collegelogo m-2 hidden sm:block border border-slate-400 rounded-md' style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                        <img
                            src={CollegeData[collegeId - 1].logo}
                            alt={CollegeData[collegeId - 1].logo}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className=' m-2'>
                        <div>
                            <h2 className='text-xl ms-1 text-start'>{CollegeData[collegeId - 1].name}</h2>
                        </div>
                        <div className='flex gap-2 break-words text-start'>
                            <LocationOnIcon color='action' fontSize='small' className='pt-1' />
                            <p className='break-words'>{CollegeData[collegeId - 1].location}</p>
                        </div>
                        <div className='flex gap-2'>
                            <CalendarMonthIcon color='action' fontSize='small' className='pt-1' />
                            <p><span>Estd. </span>{CollegeData[collegeId - 1].established}</p>
                        </div>
                        <div className='flex gap-2'>
                            <StarIcon color='action' fontSize='small' className='pt-1' />
                            <p><span>Rating </span>{CollegeData[collegeId - 1].rating}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="custom-navbar flex m-2 gap-2 items-center justify-between font-semibold sm:ms-5">
                    <div className='flex gap-1 sm:gap-5'>
                        <Link to={`/colleges/${collegeId}#overview`}>Overview</Link>
                        <Link to={`/colleges/${collegeId}#courses`}>Courses</Link>
                        <Link to="#gallery">Gallery</Link>
                    </div>
                    <Link to={"/apply"}>
                        <button className="applynow w-1/1 rounded p-1 items-center">Apply Now </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CollegeThumbnail;