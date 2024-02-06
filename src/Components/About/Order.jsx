import { useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";
import emailjs from '@emailjs/browser';

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
    const [activeButton, setActiveButton] = useState('');
    const [addres, setAddres] = useState()
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState({
        supplier: '',
        pickup_address: '',
        dropoff_address: '',
        pickup_date: '',
        pickup_time: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email_addres: '',
    })
    const form = useRef();

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xanc20q', 'template_9gfdd7j', form.current, {
                publicKey: 'YrU2W-0Lv0jn5tlod',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='mt-12'>
            <div className="group-button" role="group">
                <button
                    onClick={() => { setActiveButton('One-way'); }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent 
              focus:z-10 ${activeButton === 'One-way' ? 'bground' : ''} dark:hover:text-white`}
                >
                    One-way
                </button>

                <button
                    onClick={() => { setActiveButton('Roundtrip'); }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent 
              focus:z-10 ${activeButton === 'Roundtrip' ? 'bground' : ''} `}
                >
                    Roundtrip
                </button>

                <button
                    onClick={() => { setActiveButton('Hourly'); }}
                    type="button"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent 
              focus:z-10 ${activeButton === 'Hourly' ? 'bground' : ''} dark:hover:text-white`}
                >
                    Hourly
                </button>
            </div>
            <div className="w-full h-[148px] flex-col justify-start items-start gap-[30px] inline-flex">

                <div className=" grid grid-cols-2 relative w-full h-[73px] justify-start items-end gap-6 md:inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[250.07px] h-[13.69px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup address</div>
                        <div className="w-[150px] md:w-[240.04px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <FaSearch />
                            <input
                                onChange={(e) =>
                                    setEmail({
                                        ...email,
                                        pickup_address: e.target.value,
                                    })
                                }
                                value={addres} type="text" className="w-full outline-none text-zinc-500 text-[10px] font-semibold font-['Syne'] bg-transparent" placeholder='Pickup location'
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
                                        {data.map((value,index) => {
                                            return (
                                                <div key={index} onClick={() => Idselect(value.addres)} className='p-2 hover:bg-slate-400 w-full cursor-pointer'>
                                                    <p >{value.addres}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className=" flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[146.43px] h-[13.69px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Dropoff address</div>

                        <div onFocus={() => handleInputChange2()} className="w-[150px] md:w-[197.04px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <FaSearch />
                            <input
                                onChange={(e) =>
                                    setEmail({
                                        ...email,
                                        dropoff_address: e.target.value,
                                    })}
                                value={addres}
                                onFocus={() => handleInputChange2()}
                                type="text" className="w-full outline-none text-zinc-500 text-[10px] font-semibold font-['Syne'] bg-transparent" placeholder='Dropoff location' />

                        </div>
                        {
                            isDropdownOpe2 && <div className=' shadow-2xl rounded-sm absolute  top-[76px] left-[305px] '>
                                <div className='border p-2 overflow-y-scroll h-[180px] w-[198px]  bg-white'>
                                    <div className='flex  float-end p-1 '>
                                        <h3 onClick={() => setDropdownOpen2(false)} className='cursor-pointer'>✖︎</h3>
                                    </div>
                                    <div className='flex  justify-around h-full flex-col items-center'>
                                        {data.map((value,index) => {
                                            return (

                                                <div key={index} onClick={() => Idselect(value.addres)} className='p-2 hover:bg-slate-400 w-full cursor-pointer'>
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
                        <div className="w-[150px] md:w-[208.56px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <div className="justify-start items-center gap-[9px] flex">
                                <BsCalendarDate />
                                <input
                                    onChange={(e) =>
                                        setEmail({
                                            ...email,
                                            pickup_date: e.target.value,
                                        })}
                                    defaultValue={currentDate} type='date' className="text-zinc-500 text-[10px] font-semibold font-['Syne'] outline-none bg-transparent" placeholder='Today, Dec 22' />
                            </div>

                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[107.46px] h-[13.83px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup time</div>
                        <div className="w-[150px] md:w-[198.29px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">

                            <div className="justify-start items-center gap-[9px] flex">
                                <IoTimeSharp />
                                <input
                                    onChange={(e) =>
                                        setEmail({
                                            ...email,
                                            pickup_time: e.target.value,
                                        })}
                                    defaultValue={currentTime} type='time' className="text-zinc-500 text-[10px] font-semibold font-['Syne'] outline-none bg-transparent" placeholder='4:45 pm' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[121px] h-[38px] px-[22px]  cursor-pointer  bg-black justify-center items-center  flex">
                        <div onClick={() => setModal(true)} className=" cur text-white text-[15px] font-semibold font-['Syne']">Show rides</div>
                    </div>
                    {modal &&
                        <Modal className='  w-[500px]  h-[500px] flex justify-end' closeModal={() => setModal(false)}>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                    <div>
                                        <label>Name</label>
                                        <input type="text" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <input type="text" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input type="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label>Phone</label>
                                        <input type="tel" name="user_phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div></div>
                                    <input type="submit" value="Send" className='disabled:bg-gray-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center' />
                                </div>
                            </form>
                        </Modal>

                    }

                </div>
            </div>
        </div >
    )
}

export default Order
