import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";
import Modal from '../../generic/modal';
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
    const [activeButton, setActiveButton] = useState('One-way');
    const [addres, setAddres] = useState()
    const [modal, setModal] = useState(false)


    const handleInputChange = () => {
        setDropdownOpen(true);
        setDropdownOpen2(false)
    };

    const handleInputChange2 = () => {
        setDropdownOpen2(true);
        setDropdownOpen(false)
    };

    const closeFun = () => {
        setDropdownOpen(false)
        setDropdownOpen2(false);
    }
    const Idselect = (item) => {
        closeFun()
        setAddres(item)
    }
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5);

    return (
        <div className='mt-12'>
            <div className="group-button" role="group">
                <button
                    onClick={() => { setActiveButton('One-way'); }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent 
              focus:z-10 ${activeButton === 'One-way' ? 'bg-gray-900 text-white' : ''} dark:hover:text-white`}
                >
                    One-way
                </button>

                <button
                    onClick={() => { setActiveButton('Roundtrip'); }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent 
              focus:z-10 ${activeButton === 'Roundtrip' ? 'bg-gray-900 text-white' : ''} `}
                >
                    Roundtrip
                </button>

                <button
                    onClick={() => { setActiveButton('Hourly'); }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent 
              focus:z-10 ${activeButton === 'Hourly' ? 'bg-gray-900 text-white' : ''} dark:hover:text-white`}
                >
                    Hourly
                </button>
            </div>
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
                    <div className="w-[121px] h-[38px] px-[22px]  cursor-pointer  bg-black justify-center items-center  flex">
                        <div onClick={() => setModal(true)} className=" cur text-white text-[15px] font-semibold font-['Syne']">Show rides</div>

                    </div>
                    {modal &&
                        <Modal className='  w-[500px] h-[500px] flex justify-end' closeModal={() => setModal(false)}>
                            <div className=''>
                                <form>
                                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                        </div>
                                        <div>
                                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                        </div>

                                        <div>
                                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                        </div>

                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                                        </div>
                                    </div>
                                </form>



                            </div>

                        </Modal>
                    }

                </div>
            </div>
        </div>
    )
}

export default Order
