import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";
const data = [
    {
        id: 1,
        addres: 'Uzbekistan',
    },
    {
        id: 2,
        addres: 'Uzbekistan',
    },
    {
        id: 2,
        addres: 'Uzbekistan',
    }, {
        id: 3,
        addres: 'Uzbekistan',
    },
    {
        id: 1,
        addres: 'Uzbekistan',
    },
    {
        id: 2,
        addres: 'Uzbekistan',
    },
    {
        id: 2,
        addres: 'Uzbekistan',
    }, {
        id: 3,
        addres: 'Uzbekistan',
    },
]

const Order = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpe2, setDropdownOpen2] = useState(false);
    const [addres,setAddres] =useState() 


    const handleInputChange = (e) => {
        setDropdownOpen(true);
        setDropdownOpen2(false)
    };

    const handleInputChange2 = (e) => {
        setDropdownOpen2(true);
        setDropdownOpen(false)
    };

    const closeFun = () => {
        setDropdownOpen(false)
        setDropdownOpen2(false);
    }
    const  Idselect = (item) => {
        closeFun()
        setAddres(item)
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5);

    return (
        <div className='mt-12'>
            <div className="w-full h-[148px] flex-col justify-start items-start gap-[30px] inline-flex">

                <div className="   relative w-full h-[73px] justify-start items-end gap-6 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[250.07px] h-[13.69px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup address</div>
                        <div className="w-[240.04px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <FaSearch />
                            <input value={addres} type="text" className="w-full outline-none text-zinc-500 text-[10px] font-semibold font-['Syne'] bg-transparent" placeholder='Pickup location'
                                onFocus={() => handleInputChange()}
                            />

                        </div>
                        {
                            isDropdownOpen && <div className='shadow-2xl  rounded-sm absolute  top-[76px] left-[0px] ' >
                                <div className='h-[180px] overflow-y-scroll w-[240px] border bg-white'>
                                    <div className='flex  float-end p-1 '>
                                        <h3 onClick={() => setDropdownOpen(false)} className='cursor-pointer'>✖︎</h3>
                                    </div>
                                    <div className='flex  justify-around h-full flex-col items-center'>
                                        {data.map((value) => {
                                            return (
                                                <div onClick={() => Idselect(value.addres)} className='p-2 hover:bg-slate-400 w-full cursor-pointer'>
                                                    <p >{value.addres}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {/* <div onClick={() =>closeFun()} className=' absolute top-0 left-0 right-0 bottom-0 z-10  h-[100vh]'>

                    </div> */}
                    <div className=" flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[146.43px] h-[13.69px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Dropoff address</div>

                        <div onFocus={() => handleInputChange2()} className="w-[197.04px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <FaSearch />
                            <input
                            value={addres}
                                onFocus={() => handleInputChange2()}
                                type="text" className="w-full outline-none text-zinc-500 text-[10px] font-semibold font-['Syne'] bg-transparent" placeholder='Dropoff location' />

                        </div>
                        {
                            isDropdownOpe2 && <div className=' shadow-2xl rounded-sm absolute  top-[76px] left-[305px] ' closeModal={() => closeModal()}>
                                <div className='border p-2 overflow-y-scroll h-[180px] w-[198px]  bg-white'>
                                    <div className='flex  float-end p-1 '>
                                        <h3 onClick={() => setDropdownOpen2(false)} className='cursor-pointer'>✖︎</h3>
                                    </div>
                                    <div className='flex  justify-around h-full flex-col items-center'>
                                        {data.map((value) => {
                                            return (
                                                <div onClick={() => Idselect(value.addres)} className='p-2 hover:bg-slate-400 w-full cursor-pointer'>
                                                    <p >{value.addres}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[108.64px] h-[13.83px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup date</div>
                        <div className="w-[208.56px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <div className="justify-start items-center gap-[9px] flex">
                                <BsCalendarDate />
                                <input defaultValue={currentDate} type='date' className="text-zinc-500 text-[10px] font-semibold font-['Syne'] outline-none bg-transparent" placeholder='Today, Dec 22' />
                            </div>

                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[107.46px] h-[13.83px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup time</div>
                        <div className="w-[198.29px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">

                            <div className="justify-start items-center gap-[9px] flex">
                                <IoTimeSharp />
                                <input defaultValue={currentTime} type='time' className="text-zinc-500 text-[10px] font-semibold font-['Syne'] outline-none bg-transparent" placeholder='4:45 pm' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[121px] h-[38px] px-[22px]  bg-black justify-center items-center  flex">
                        <div className="text-white text-[15px] font-semibold font-['Syne']">Show rides</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
