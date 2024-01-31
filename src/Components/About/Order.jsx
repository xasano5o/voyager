import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";

const Order = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [mockData, setMockData] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setPickupLocation(inputValue);

        // Mock datalarni olish va saqlash
        const fetchedMockData = fetchMockDataFromServer(inputValue);
        setMockData(fetchedMockData);

        // Dropdownni ochish
        setDropdownOpen(true);
    };

    const fetchMockDataFromServer = (query) => {
        // Bu joyda sizning backend-serveringizga so'rov jo'natishingiz mumkin
        // Mock datalarni qaytaruvchi funksiya yaratishingiz kerak
        // Masalan, fetch('/api/mockdata?query=' + query).then(response => response.json());
        const mockData = [
            { id: 1, label: 'Mock Location 1' },
            { id: 2, label: 'Mock Location 2' },
            { id: 3, label: 'Mock Location 3' },
        ];
        return mockData;
    };

    const handleDropdownItemClick = (selectedItem) => {
        setPickupLocation(selectedItem.label);
        setDropdownOpen(false);
    };


    return (
        <div className='mt-12'>
            <div className="w-full h-[148px] flex-col justify-start items-start gap-[30px] inline-flex">
  
                <div className="w-full h-[73px] justify-start items-end gap-6 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[140.07px] h-[13.69px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup address</div>
                        <div className="w-[197.04px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <FaSearch />
                            <input type="text" className="outline-none text-zinc-500 text-[10px] font-semibold font-['Syne'] bg-transparent" placeholder='Pickup location'
                                value={pickupLocation}
                                onChange={handleInputChange}
                            />
                            {isDropdownOpen && (
                                <ul className="mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10">
                                    {mockData.map((item) => (
                                        <li
                                            key={item.id}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleDropdownItemClick(item)}
                                        >
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[146.43px] h-[13.69px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Dropoff address</div>

                        <div className="w-[197.04px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <FaSearch />
                            <input type="text" className="outline-none text-zinc-500 text-[10px] font-semibold font-['Syne'] bg-transparent" placeholder='Dropoff location' />

                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[108.64px] h-[13.83px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup date</div>
                        <div className="w-[208.56px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">
                            <div className="justify-start items-center gap-[9px] flex">
                                <BsCalendarDate />
                                <input type='date' className="text-zinc-500 text-[10px] font-semibold font-['Syne'] outline-none bg-transparent" placeholder='Today, Dec 22' />
                            </div>

                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-[107.46px] h-[13.83px] text-zinc-500 text-[15px] font-semibold font-['Syne']">Pickup time</div>
                        <div className="w-[198.29px] h-[38px] p-[9px] bg-gray-200 rounded-[5px] justify-start items-center gap-[9px] inline-flex">

                            <div className="justify-start items-center gap-[9px] flex">
                                <IoTimeSharp />
                                <input type='time' className="text-zinc-500 text-[10px] font-semibold font-['Syne'] outline-none bg-transparent" placeholder='4:45 pm' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[121px] h-[38px] px-[22px] py-[29px] bg-black justify-center items-center gap-[21px] flex">
                        <div className="text-white text-[15px] font-semibold font-['Syne']">Show rides</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
