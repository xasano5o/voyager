import Line from "../../assets/icon/Bus Location 1 1.png"
import Vecto from "../../assets/icon/Vector.png"



const CaruselNav = () => {


  return (
    <div className="w-full h-[390px] relative bg-stone-100 rounded-bl-[25px] rounded-br-[25px]">
      <div className="px-[23px] py-[15px] left-[23px] top-[230px] absolute flex-col justify-start items-start gap-[13px] inline-flex">
        <div className="self-stretch text-black text-2xl font-semibold font-['Syne'] uppercase tracking-widest">Complete your journey <br />whit scheduled ROUndtrips</div>
        <div className="self-stretch text-black text-[15px] font-normal font-['Syne'] tracking-wide">Introducing stress-free roundtrip reservations <br />for airoports, events and everyday journeys</div>
      </div>
      <div className=" absolute  right-[100px]"> 
        <div className=" relative ">
          <img className="fade-in-from-top" src={Line} alt="Line" />
          <img className="rotate-360 absolute top-[110px] bottom-2 left-[40px]" src={Vecto} alt="Vecto" />
        </div>
        <div className=" relative  bottom-[250px]  left-[120px] right-[0px]">
          <img className="fade-in-from-top" src={Line} alt="Line" />
          <img className="rotate-360 absolute top-[110px] bottom-2 left-[40px]" src={Vecto} alt="Vecto" />
        </div>
      </div>
    </div>

  )
}

export default CaruselNav