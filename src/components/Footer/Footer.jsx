import React from 'react';
import TalentMatch from "../../assets/images/talentMatch.png";
import SocialMedia from "../../assets/Icons/Group 9969.png";
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div>
            <div className='p-8 md:px-16 bg-black py-10 text-white mt-24'>
                {/* Logos and Links */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-5 items-center'>
                    <div>
                        <div>
                            <img src={TalentMatch} alt="" />
                        </div>
                        <div className='pt-5'>
                            <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className='py-4'>
                            <img src={SocialMedia} alt="" />
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Company</li>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Product</li>
                            <li>Prototype</li>
                            <li>Plan & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Support</li>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Contact</li>
                            <li>Jamalpur, Mymensingh</li>
                            <li>+880 1611765966</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Last Part */}
                <hr />
                <div className='flex justify-between py-8'>
                    <div>
                        &copy;{year} Talent Match, All Rights Reserved
                    </div>
                    <div>
                        Powered by Talent Match ❤
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
