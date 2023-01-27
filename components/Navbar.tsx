import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "./Button"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    function menu() {
        setOpen(!open)
        document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")
    }
    return(
        <div>
            <div className="w-full flex justify-between">
                <Link href={"/"} className="relative max-w-[69px] lg:max-w-[107px]">
                    <Image src={"/logo.png"} width={107} height={107} alt="" />
                </Link>
                <div className="max-w-lg lg:flex space-x-5 items-center hidden">
                    <Link href="/#about"><p className="text-white text-[16px] hover:text-red-700">About us</p></Link>
                    <Link href="/#services"><p className="text-white text-[16px] hover:text-red-700">Services</p></Link>
                    <Link href="/#strategies"><p className="text-white text-[16px] hover:text-red-700">Strategies</p></Link>
                    <Link href="/#contact"><Button text="CONTACT US" url="" /></Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => menu()}>{
                        open ? <XIcon className="h-12 w-12 text-white" /> : <MenuAlt3Icon className="h-12 w-12 text-white" />}</button>
                </div>
            </div>
            <div className="bg-black w-64 h-screen fixed top-0 left-0 transition duration-200 ease-in-out transform -translate-x-full sidebar lg:hidden z-20">
                <div className="p-3.5"><Image src={"/logo.png"} alt="logo" width={75} height={75} className="block lg:hidden" /></div>
                <div className="px-3.5 space-y-0.5">
                        <Link legacyBehavior href="/#about">
                            <div className="hover:cursor-pointer hover:bg-red-700 rounded-lg p-2.5 w-full" onClick={() => menu()}>
                                <p className="text-[16px] text-white tracking-wide w-full">About us</p>
                            </div>
                        </Link>
                        <Link legacyBehavior href="/#services">
                            <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg" onClick={() => menu()}>
                                <p className="text-[16px] text-white tracking-wide w-full">Services</p>
                            </div>
                        </Link>
                    <Link legacyBehavior href="/#strategies">
                        <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg text-[16px] text-white tracking-wide" onClick={() => menu()}>
                            <p className="text-[16px] text-white tracking-wide w-full">Strategies</p>
                        </div>
                    </Link>
                    <Link legacyBehavior href="/#contact">
                        <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg" onClick={() => menu()}>
                            <p className="text-[16px] text-white tracking-wide w-full">Contact Us</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}