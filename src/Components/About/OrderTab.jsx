import React, { useState } from 'react'
import OrderCom from './Order';

const OrderTab = () => {
    const tabs = [
        {
            id: "One-way",
            label: "One-way",
            icon: '',
            component: OrderCom,
        },
        {
            id: "Roundtrip",
            label: "Roundtrip",
            icon: '',
            component: OrderCom,
        },
        {
            id: "Hourly",
            label: "Hourly",
            icon: '',
            component: OrderCom,
        },
    ];
    const [activeTab, setActiveTab] = useState("One-way");

    const ActiveContent = tabs.find((tab) => tab.id === activeTab)?.component || null;

  return (
    
    <div>
        <div className="w-full   py-5 rounded ">
            <div className=" flex-col sm:flex-row p-2.5 border border-neutral-400 justify-between items-center inline-flex">
                {
                tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex items-center gap-2 py-2 px-4  ${activeTab === tab.id
                            ? "border-b-2 bg-black  text-center text-white text-base font-semibold font-['Syne'] "
                            : " border-gray-200 text-center text-zinc-500 text-base font-semibold font-['Syne']"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-1 w-full">
                {ActiveContent ? <ActiveContent /> : "Contentni ko'rsatish kerak bo'lgan joyda misol tekstni qo'shing."}
            </div>
        </div>

    </div>
  )
}

export default OrderTab