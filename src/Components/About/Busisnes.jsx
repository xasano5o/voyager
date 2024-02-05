import logo from "../../assets/icon/Vector.svg"
import restanle7 from "../../assets/7.png"
import { Link } from "react-router-dom"

const Busisnes = () => {
    return (
        <div>
            <div className="mt-12 w-full flex-col justify-start items-center gap-[91px] inline-flex">
                <div className="w-full justify-start items-start gap-[17px] grid grid-cols-1 md:inline-flex">
                    <div className="md:w-[515px] flex-col justify-start items-start gap-[50px] inline-flex">
                        <div className="self-stretch h-[74px] flex-col justify-start items-start gap-5 flex">
                            <div className="w-[272px] h-10 relative">
                                <img src={logo} alt="" />
                            </div>
                            <div className="text-black text-base font-medium font-['Codec Pro']">FOR BUSINESS</div>
                        </div>
                        <div className="self-stretch h-44 flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch text-black text-2xl font-medium font-['Syne'] tracking-widest">YOUR TRANSPORTATION PARTNER</div>
                            <div className="self-stretch text-black text-base font-normal font-['Syne'] tracking-wide">Voyager for Business gives your organization more control,<br />deeper insights, and features built for enterprise users.<br />We provide the technology, vehicles, and professionally trained<br />drivers to power your transportation offering.</div>
                            <Link to="/" className="text-black text-base font-medium font-['Syne'] underline tracking-wide">Learn more</Link>
                        </div>
                    </div>
                    <div className="md:w-[492px] h-[300px] justify-start items-center gap-[58px] flex">
                        <img className="grow shrink basis-0 self-stretch" src={restanle7} />
                    </div>
                </div>
                <div className="mb-12 md:mb-0 w-[246px] h-[41px] px-2.5 bg-black justify-center items-center gap-5 inline-flex">
                    <button className="grow shrink basis-0 text-center text-white text-[13px] font-semibold font-['Syne'] tracking-wide">GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default Busisnes
