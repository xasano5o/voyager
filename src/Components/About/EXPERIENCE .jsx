import logo from "../../assets/icon/Vector.svg"
import restanle1 from "../../assets/1.png"
import restanle2 from "../../assets/2.png"
import restanle3 from "../../assets/3.png"
const EXPERIENCE = () => {
    return (
        <div>
            <div className="w-[1024px] mt-12 flex-col justify-center items-center gap-[60px] inline-flex">
                <div className="self-stretch justify-start items-center gap-7 inline-flex">
                    <div className="">
                        <img src={logo} alt="" className='h-12 w-[272px]' />
                    </div>
                    <div className="grow shrink basis-0 text-black text-base font-normal font-['Syne']">commited to delivering exceptional service that reflects our core values of  trust, discretion and modern tradition, we are pleased to unveil our new brand indentity designed to  elevate your journey.</div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-start items-start gap-[38px] inline-flex">
                    <img className="grow shrink basis-0 self-stretch" src={restanle1} />
                    <img className="grow shrink basis-0 self-stretch" src={restanle2} />
                    <img className="grow shrink basis-0 self-stretch" src={restanle3} />
                </div>
                <div className="w-[246px] h-[41px] px-2.5 bg-black justify-center items-center gap-5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-[13px] font-semibold font-['Syne'] tracking-wide">EXPERIENCE THE VOYAGER</div>
                </div>
            </div>
        </div>
    )
}

export default EXPERIENCE 
