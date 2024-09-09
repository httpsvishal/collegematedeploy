import { Footer } from "flowbite-react";
import { BsFacebook,BsInstagram, BsTwitter } from "react-icons/bs";

const FooterComp = () => {
    return (
        <Footer bgDark className="rounded-none  ">
            <div className="w-full ">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 footercomp">
                    <div>
                        <Footer.Title title="CollegeMate India" className="text-start" />
                        <Footer.LinkGroup col className="footer-link-group">
                            <Footer.Link href="/colleges" className="footer-link">Colleges</Footer.Link>
                            <Footer.Link href="#" className="footer-link">About us</Footer.Link>
                            <Footer.Link href="#" className="footer-link">Book a Video Call</Footer.Link>
                            <Footer.Link href="#" className="footer-link">Discover Careers</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Courses" className="text-start" />
                        <Footer.LinkGroup col className="footer-link-group">
                            <Footer.Link href="#" className="footer-link">B.Tech</Footer.Link>
                            <Footer.Link href="#" className="footer-link">BBA</Footer.Link>
                            <Footer.Link href="#" className="footer-link">MBA</Footer.Link>
                            <Footer.Link href="#" className="footer-link">B.Pharma</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div> 
                        <Footer.Title title="help center" className="text-start" />
                        <Footer.LinkGroup col className="footer-link-group">
                            <Footer.Link href="https://www.instagram.com/collegemateindia?igsh=MTZ5bjNkaTZqanhodg==" className="footer-link">Instagram</Footer.Link>
                            <Footer.Link href="https://x.com/collegemate_?s=11" className="footer-link">Twitter</Footer.Link>
                            <Footer.Link href="https://www.facebook.com/share/mtrENhQC8KMESs9E/?mibextid=LQQJ4d" className="footer-link">Facebook</Footer.Link>
                            <Footer.Link href="https://www.linkedin.com/in/collegemate-india-60702a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="footer-link">LinkedIn</Footer.Link>
                            <Footer.Link href="https://youtube.com/@collegemateindia?si=hGvJx6d954ZJcxl6" className="footer-link">Youtube</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" className="text-start" />
                        <Footer.LinkGroup col className="footer-link-group">
                            <Footer.Link href="/privacy" className="footer-link">Privacy Policy</Footer.Link>
                            <Footer.Link href="#" className="footer-link">Licensing</Footer.Link>
                            <Footer.Link href="#" className="footer-link">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="" by="CollegeMate India™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/share/mtrENhQC8KMESs9E/?mibextid=LQQJ4d" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/collegemateindia?igsh=MTZ5bjNkaTZqanhodg==" icon={BsInstagram} />
                        <Footer.Icon href="https://x.com/collegemate_?s=11" icon={BsTwitter} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComp;