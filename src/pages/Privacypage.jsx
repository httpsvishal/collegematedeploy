import Navbar from "../components/Navbar";
import FooterComp from "../components/Footer";
import SearchBar from "../components/SearchBar";

const PrivacyPage = () => {
    return (
        <>
            <Navbar />
            <SearchBar />
            <div>

                <h1 className="text-4xl font-semibold sm:font-bold p-5 highlighted my-8">CollegeMate India Privacy Policy</h1>
                <p className="text-lg font-semibold">
                    At CollegeMate India, we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your data.
                </p>
                <div className="p-5 sm:p-10">
                    <h2 className="text-2xl text-start highlighted font-semibold">
                        Information We Collect
                    </h2>
                    
                        <ul className="font-semibold ms-5 list-disc text-start text-md">
                            <li>Personal information: name, email address, phone number, and password (if you create an account)</li>
                            <li>Usage data: browsing history, search queries, and interactions with our website</li>
                            <li>Device information: IP address, browser type, and device type</li>
                        </ul>
                    
                    <h2 className="text-2xl text-start highlighted font-semibold">
                        How We Use Your Information
                    </h2>
                    
                        <ul className="font-semibold ms-5 list-disc text-start text-md">
                            <li>To provide and improve our services</li>
                            <li>To communicate with you about our services and updates</li>
                            <li>To personalize your experience on our website</li>
                            <li>To detect and prevent fraud or abuse</li>
                        </ul>
                    
                    <h2 className="text-2xl text-start  highlighted font-semibold">
                        Data Security
                    </h2>
                    
                        <ul className="font-semibold  ms-5 list-disc text-start text-md">
                            <li>We use industry-standard encryption to protect your data</li>
                            <li>We store your data on secure servers</li>
                            <li>We implement access controls to ensure only authorized personnel can access your data</li>
                        </ul>
                    
                    <h2 className="text-2xl text-start highlighted font-semibold">
                        Data Sharing
                    </h2>
                    
                        <ul className="font-semibold ms-5 list-disc text-start text-md">
                            <li>We do not share your personal information with third parties without your consent</li>
                            <li>We may share anonymized usage data with partners or advertisers</li>

                        </ul>
                    
                    <h2 className="text-2xl text-start highlighted font-semibold">

                        Your Rights
                    </h2>
                    
                        <ul className="font-semibold ms-5 list-disc text-start text-md">
                            <li>You can request access to your personal information</li>
                            <li>You can request correction or deletion of your personal information</li>
                            <li>- You can opt-out of marketing communications
                            </li>
                        </ul>
                    
                    <h2 className="text-2xl text-start highlighted font-semibold">
                        Changes to This Policy
                    </h2>
                    
                        <ul className="font-semibold ms-5 list-disc text-start text-md">
                            <li>We may update this policy from time to time</li>
                            <li>We will notify you of significant changes</li>
                        </ul>
                    
                    <h2 className="text-2xl text-start highlighted font-semibold">
                        Contact Us
                    </h2>
                    
                        <ul className="font-semibold ms-5 list-disc text-start text-md mb-5 sm:mb-10">
                            <li>If you have questions or concerns about this policy, please contact us at [insert contact email or form]</li>
                        </ul>
                    <hr />
                    <p className="font-semibold text-start text-md" >
                        <span className="text-red-500 font-bold text-start text-lg">Note: </span>
                        This is just a sample privacy policy, and you should adjust it according to your specific needs and comply with relevant laws and regulations, such as the General Data Protection Regulation (GDPR) or the Information Technology Act, 2000 (India).
                    </p>
                </div>
            </div>
            <FooterComp />
        </>
    )
};

export default PrivacyPage;