import Line from "../../assets/icon/Bus Location 1 1.png"
import Vecto from "../../assets/icon/Vector.png"
import Vector from "../../assets/icon/Vector (2).png"


const CaruselNav = () => {

  return (
    <div className="mobile-carusel  w-full h-[390px] grid grid-cols-2  bg-stone-100 rounded-bl-[25px] rounded-br-[25px]">
      <div className=" p-[20px]  flex-col justify-end items-start gap-[13px] inline-flex">
        <div className="mobile-tex  self-stretch text-black text-2xl font-semibold font-['Syne'] uppercase tracking-widest">Complete your journey <br />whit scheduled ROUndtrips</div>
        <div className="mobile-tex2 self-stretch text-black text-[15px] font-normal font-['Syne'] tracking-wide">Introducing stress-free roundtrip reservations <br />for airoports, events and everyday journeys</div>
      </div>
      <div>
        <div className="flex relative">
          <div className="md:absolute md:top-[65px] z-10">
            <img className="" src={Line} alt="Line" />
            <img className="rotate-360  z-10 absolute bottom-[80px]  right-[230px]  " src={Vecto} alt="Vecto" />
          </div>
          <div className="md:relative top-[80px] left-[150px] md:top-[80px]">
            <img className=" " src={Line} alt="Line" />
            <img className="rotate-360line2  absolute bottom-[80px]  right-[230px]  " src={Vector} alt="Vecto" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default CaruselNav