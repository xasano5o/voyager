import { Link } from "react-router-dom"
import restanle3 from "../../assets/3.png"
import restanle4 from "../../assets/4.png"
import restanle5 from "../../assets/5.png"
const OurSer = () => {
    return (
        <div>
            <div className="mt-12 w-full flex-col justify-start items-center gap-[89px] inline-flex">
                <div className="text-center text-black text-[32px] font-semibold font-['Syne'] tracking-widest">OUR SEVICES</div>
                <div className=" w-full h-[1707px] md:h-[569px] justify-start items-start gap-[43px] grid grid-cols-1 md:inline-flex">
                    <div className=" self-stretch rounded-[20px] flex-col justify-start items-start gap-[35px] inline-flex">
                        <img className="self-stretch h-[300px] w-[312px]" src={restanle3} />
                        <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
                            <div className="h-[166px] flex-col justify-start items-start gap-8 flex">
                                <div className="text-black text-2xl font-semibold font-['Syne'] tracking-widest">Custom Charters </div>
                                <div className="self-stretch text-black text-base font-normal font-['JUST Sans']">VOYAGER prides itself on the extensive variety of vehicles in our<br />fleet, designed to accommodate any group size and meet a<br />diverse range of transportation needs.</div>
                            </div>
                            <Link to="/" className="self-stretch text-black text-base font-medium font-['Syne'] underline">Learn more</Link>
                        </div>
                    </div>
                    <div className=" self-stretch rounded-[20px] flex-col justify-start items-start gap-[35px] inline-flex">
                        <img className="self-stretch h-[300px] w-[312px]" src={restanle4} />
                        <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
                            <div className="self-stretch h-40 flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch text-black text-2xl font-semibold font-['Syne'] tracking-widest">Corporate Shuttles </div>
                                <div className="self-stretch h-[99px] text-black text-base font-normal font-['JUST Sans']">Dynamic Solutions for all corporate transportation needs.<br />Whether you are planning small trip for your employees or huge<br />cnvention, we are here to assist!</div>
                            </div>
                            <Link to="/" className="self-stretch text-black text-base font-medium font-['Syne'] underline">Learn more</Link>
                        </div>
                    </div>
                    <div className=" self-stretch rounded-[20px] flex-col justify-start items-start gap-[35px] inline-flex">
                        <img className="w-[312px] self-stretch h-[300px]" src={restanle5} />
                        <div className="self-stretch    grow shrink basis-0 flex-col justify-between items-start flex">
                            <div className="self-stretch h-[161px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch text-black text-2xl font-semibold font-['Syne'] tracking-widest">School Charters</div>
                                <div className="self-stretch h-[158px] text-black text-base font-normal font-['JUST Sans']">Safe and reliable transportation solutions for schools,<br />universities and any educational institutions with highly<br />experienced and certified drivers.<br /><br /><br /></div>
                            </div>
                            <Link to="/" className="self-stretch text-black text-base font-medium font-['Syne'] underline">Learn more</Link>
                        </div>
                    </div>
                </div>
                <div className="w-[246px] h-[41px] px-2.5 bg-black justify-center items-center gap-5 inline-flex">
                    <button className="grow shrink basis-0 text-center text-white text-[13px] font-semibold font-['Syne'] tracking-wide">EXPLORE ALL SERVICES</button>
                </div>
            </div>
        </div>
    )
}

export default OurSer
