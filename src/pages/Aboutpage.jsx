import React from 'react';
import Navbar from '../components/Navbar';
import FooterComp from '../components/Footer';
import sambhav from '../assets/sambhav.JPG';
import thanks from "../assets/thanks.json"
import Lottie from 'lottie-react';

const Aboutpage = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center mt-5 mb-5 sm:mb-10">
                <h1 className="font-bold font-serif text-5xl mt-11 mb-6">
                    About Us
                </h1>
                <hr />
                <div className="founder  sm:flex my-5 justify-center">
                    <div className=" sm:ml-5 flex flex-col items-center highlighted font-semibold justify-center w-full sm:w-1/4 ">
                        <img src={sambhav} alt="Sambhav" className="w-36 h-36 rounded-full object-cover" />
                        <p className='text-2xl' >Sambhav Sharma</p>
                        <p >Founder & Chief Mentor</p>
                    </div>
                    <div className='sm:w-3/4 flex  flex-col p-5 font-semibold gap-2 sm:gap-5  '>

                        <h2 className='text-3xl  highlighted text-start font-semibold'>From the Founder</h2>
                        <p className='text-start sm:text-base'>
                            As the founder of Collegemate India, I Sambhav Sharma, embarked on a journey to simplify the college
                            admission process for students across the nation. Having witnessed the complexities and overwhelming
                            choices faced by aspiring students, I wanted to create a platform that not only offers information but
                            also provides tailored counseling and support to help students find the best colleges that align with
                            their goals and aspirations. Collegemate India is committed to bridging the gap between students and
                            institutions, ensuring they make well-informed decisions about their education and future. Our platform
                            is designed to empower students, providing resources, insights, and personalized guidance to help them
                            confidently navigate their academic paths.
                        </p>
                    </div>
                </div>
                <hr />
                <div className=' flex  flex-col p-5 sm:p-10 font-semibold gap-2 sm:gap-5  '>

                    <h2 className='text-3xl  highlighted font-semibold'>About our Team</h2>
                    <p className='text-start sm:text-base '>
                        At Collegemate India, our team is made up of highly skilled and passionate professionals, each
                        dedicated to guiding students through the complex process of choosing the best colleges for their
                        academic and career goals. We pride ourselves on providing personalized counseling, expert insights,
                        and data-driven recommendations to ensure every student makes informed decisions. Our commitment is to
                        empower students to find the right fit for their future, and this commitment is reflected in every aspect
                        of our team's work.
                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Admissions Counselors </h2>
                    <p className='text-start sm:text-base '>
                        Our admissions counselors are a team of highly trained professionals who specialize in student guidance.
                        Each counselor has an in-depth knowledge of colleges and universities across India, covering a wide range
                        of disciplines, campuses, and educational environments. They work closely with students, understanding their
                        academic strengths, career goals, and personal preferences, to curate a list of colleges that offer the best
                        opportunities for them. The counselors provide insights into various college admission processes, including
                        tips on entrance exams, scholarships, interviews, and deadlines. Their role extends beyond merely suggesting
                        colleges—they provide personalized support throughout the entire application process, ensuring that students
                        feel confident and prepared at every stage.
                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Research & Data Team </h2>
                    <p className='text-start sm:text-base '>
                        The research and data team at Collegemate India is the engine that powers our recommendations. This team is
                        responsible for gathering, analyzing, and maintaining a comprehensive database of information on colleges and
                        universities across India. From course offerings, faculty expertise, and campus facilities to placement
                        statistics, student satisfaction, and financial aid options, our research team ensures that no stone is
                        left unturned. They constantly update and expand our database with the latest insights, rankings, and
                        admission trends. This data-driven approach allows us to offer students highly accurate and relevant guidance,
                        helping them make decisions based on the most up-to-date information available.
                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Technical Support Team </h2>
                    <p className='text-start sm:text-base '>
                        Our marketing and outreach team plays a vital role in building connections with
                        schools, students, and parents nationwide. They are responsible for organizing
                        webinars, workshops, and other interactive sessions that inform students about
                        college admissions, career planning, and scholarship opportunities. This team also
                        manages our digital presence, ensuring that students have easy access to our
                        resources online. By maintaining active communication channels across social media
                        platforms, websites, and offline events, the marketing and outreach team ensures
                        that Collegemate India reaches students across the country, including those in
                        underserved areas.
                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Content Development Team </h2>
                    <p className='text-start sm:text-base '>
                        The content development team creates informative, engaging, and student-friendly
                        material that covers a wide range of topics relevant to college admissions. From
                        blog posts about scholarship opportunities to detailed guides on specific career
                        paths, this team ensures that students have access to the information they need to
                        make well-informed decisions. The team also curates resources such as college
                        application templates, study tips, interview preparation guides, and more, all
                        designed to equip students with the tools necessary for success in the admissions
                        process.                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Student Ambassadors </h2>
                    <p className='text-start sm:text-base '>
                        Our student ambassadors are current college students who have been through the
                        admissions process with the help of Collegemate India. They offer a real-world
                        perspective on campus life, academic experiences, and the admissions process.
                        Their insights help prospective students gain a better understanding of what to
                        expect when they start college. By sharing their personal stories, challenges,
                        and successes, our ambassadors serve as relatable mentors who guide younger
                        students in making informed decisions. They are an integral part of building
                        trust and transparency within our community.
                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Partnerships & Institutional Liaisons </h2>
                    <p className='text-start sm:text-base '>
                        This team is responsible for building relationships with colleges and universities,
                        ensuring that Collegemate India has direct access to admissions offices and can
                        offer exclusive insights into various institutions. Their partnerships with
                        educational institutions also allow them to stay informed about new programs,
                        scholarship opportunities, and admission updates, which are then passed on to our
                        students. By fostering strong ties with colleges, the team ensures that our
                        platform remains a reliable source of the latest information and opportunities for
                        students.
                    </p>
                    <h2 className='text-2xl  highlighted text-start font-semibold'>Sambhav Sharma - Founder & Chief Mentor </h2>
                    <p className='text-start sm:text-base '>
                    As the founder of Collegemate India, Sambhav Sharma brings a vision to redefine college admissions counseling. 
                    His deep understanding of the education landscape, gained through years of experience working with students and 
                    institutions across India, allows him to lead with strategic foresight and empathy. Sambhav has a hands-on approach 
                    to mentorship, guiding students personally in navigating their academic journeys. His goal is to make the admission 
                    process simpler, more accessible, and tailored to each student's needs. Sambhav's leadership drives the team to constantly 
                    innovate and improve their services, ensuring every student gets the support they deserve.
                    </p>
                </div>
                <hr />
                <div className=' flex  flex-col p-5 sm:p-10 font-semibold gap-2 sm:gap-5  '>

                    <h2 className='text-3xl  highlighted font-semibold'>Our Vision</h2>
                    <p className='text-start sm:text-base '>
                    At Collegemate India, our vision is to make college admissions a transparent, 
                    informed, and stress-free process. We believe that every student deserves access to 
                    personalized support and accurate information to make the best decisions about their 
                    academic future. With our team of experts, we aim to create a platform that empowers 
                    students to explore, discover, and achieve their dreams by finding the perfect college 
                    that aligns with their goals and passions.
                    </p>
                    <p className='text-start sm:text-base '>
                    Together, our team's collective expertise and passion ensure that Collegemate India 
                    remains a trusted partner for students and their families as they embark on this 
                    exciting journey toward higher education.
                    </p>
                    <hr />
                    <Lottie animationData={thanks} className='h-20'  />
                    <h2 className='text-3xl  highlighted font-semibold'>For Visiting!</h2>
                    <p className='text-start sm:text-base '>
                    We truly appreciate you taking the time to explore Collegemate India. Your interest 
                    means a lot to us, and we're excited to help you on your journey toward finding the 
                    perfect college. If you have any questions or need further assistance, feel free to 
                    reach out to our team. We're here to support you every step of the way.
                    </p>
                </div>
            </div>
            <FooterComp />
        </div>
    )
};

export default Aboutpage;