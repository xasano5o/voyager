import logo from "../../assets/icon/Vector.svg";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";


const Footer = () => {
    return (
        <div className=' w-full bg-black'>
            <div className="lg:pl-8 mt-4 w-full h-[88px] flex-col justify-start items-center gap-6 inline-flex">
                <div className="self-stretch justify-start items-end gap-[51px] inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                        <img src={logo} alt="" className='bg-white' />
                        <div className="w-[514px] text-white text-[10px] font-normal font-['Syne'] tracking-tight">Sign up to be the first to find out when we add our latest offerings, exclusive amenities, and much more at<br />VOYAGER. We respect your privacy and will never share your information with any third-party vendors.</div>
                    </div>
                    <div className="w-[210px] h-9 px-2.5 bg-white justify-center items-center gap-5 flex">
                        <button className="grow shrink basis-0 text-center text-black text-base font-semibold font-['Syne'] tracking-wide">EMAIL ADDRESS</button>
                    </div>
                    <div className="w-[147px] h-9 px-2.5 border border-neutral-400 justify-center items-center gap-5 flex">
                        <button className="grow shrink basis-0 text-center text-white text-base font-semibold font-['Syne'] tracking-wide">SIGN UP</button>
                    </div>
                </div>
            </div>
            <div className="lg:pl-8 w-full h-[234px] flex-col justify-between items-center inline-flex">
                <div className="self-stretch justify-between items-end inline-flex">
                    <div className="w-[143px] flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="self-stretch text-white text-lg font-medium font-['Codec Pro']">Company</div>
                        <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">About</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Career</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Press</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Blog</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Partners</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Help & FAQ</div>
                        </div>
                    </div>
                    <div className="w-[127px] flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="self-stretch text-white text-lg font-medium font-['Codec Pro']">Explore</div>
                        <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">History</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Chauffeurs</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Essentials</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Services</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Fleet</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Cities</div>
                        </div>
                    </div>
                    <div className="w-[200px] flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="self-stretch text-white text-lg font-medium font-['Codec Pro']">Business</div>
                        <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Overview</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Corporation</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Travel Agencies</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Strategic Partnerships</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Concierge</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">DMC & Events</div>
                        </div>
                    </div>
                    <div className="w-[260px] flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="self-stretch text-white text-lg font-medium font-['Codec Pro']">Buses</div>
                        <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Charters for Schools</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Charters for Teams</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Charters for Airlines</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Charters for Government</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Charters for Emergency Services</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">Shuttle Services</div>
                        </div>
                    </div>
                    <div className="w-[189px] flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="self-stretch text-white text-lg font-medium font-['Codec Pro']">Contacts</div>
                        <div className="self-stretch h-[158px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">SALES</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">sales@voyagercls.com</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">SUPPORT</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">support@voyagercls.com</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">MEDIA</div>
                            <div className="self-stretch text-stone-300 text-sm font-normal font-['JUST Sans']">media@voyagercls.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:pl-8 w-[993px] h-[21px] justify-between items-center inline-flex">
                <div className="w-[359px] justify-start items-center gap-[21px] flex">
                    <div className="text-stone-300 text-[10px] font-normal font-['JUST Sans']">Terms</div>
                    <div className="text-stone-300 text-[10px] font-normal font-['JUST Sans']">Partner Terms</div>
                    <div className="text-stone-300 text-[10px] font-normal font-['JUST Sans']">Privacy Policy</div>
                    <div className="text-stone-300 text-[10px] font-normal font-['JUST Sans']">Legal Notice</div>
                    <div className="text-stone-300 text-[10px] font-normal font-['JUST Sans']">Accessibility</div>
                </div>
                <div className="justify-start items-center gap-[21px] flex">
                    <div className='text-white'>
                        <AiOutlineYoutube />
                    </div>
                    <div className='text-white'>
                        <FaFacebookF />
                    </div>
                    <div className='text-white'>
                        <TiSocialTwitter />
                    </div>
                    <div className='text-white'>
                        <FaInstagram />
                    </div>
                    <div className='text-white'>
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
