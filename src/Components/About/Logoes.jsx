import logo from "../../assets/icon/Vector.svg"
import Chase from "../../assets/Chase.png"
import Delta from "../../assets/Delta.png"
import Facebook from "../../assets/Facebook.png"
import Google from "../../assets/Google.png"
import jet from "../../assets/jetBlue.png"
import Microsoft from "../../assets/Microsodt.png"

const Logoes = () => {
    return (
        <div className='lg:mt-12'>
            <div className="w-[1024px] h-[70px] flex-col justify-start items-center gap-5 inline-flex">
                <img src={logo} className='justify-center' alt="" />
                <div className="w-[1024px] text-center text-zinc-500 text-base font-normal font-['Syne']">has earned trust from leading corporate companies</div>
            </div>
            <div className="mt-4 w-[1024px] h-16 justify-between items-center text-center inline-flex">

                <div className="w-[146px] h-[33px]">
                    <img src={Microsoft} alt="" />

                </div>
                <div className="w-[146px] h-[33px]">
                    <img src={Google} alt="" />

                </div>
                <div className="w-[146px] h-[33px]">
                    <img src={Delta} alt="" />
                </div>
                <div className="w-[146px] h-[33px]">
                    <img src={jet} alt="" />

                </div>
                <div className="w-[146px] h-[33px]">
                    <img src={Facebook} alt="" />
                </div>
                <div className="w-[146px] h-[33px]">
                    <img src={Chase} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Logoes
