import { useState } from "react";
import Hamburger from "../../assets/icon/hamburger.svg"
export default function HamburgerMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (

        <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="relative">
            <img src={Hamburger} alt="" />
            {isNavOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                    onClick={() => setIsNavOpen(false)}>
                </div>
            )}




        </div>
    );
}




