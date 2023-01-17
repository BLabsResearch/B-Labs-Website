import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <div className="w-full h-[650px] lg:h-auto bg-[url('/footer.png')] bg-no-repeat bg-bottom bg-cover px-3.5 py-5 
            lg:px-10 lg:py-8 flex flex-col items-center justify-center space-y-5">
            <div className="flex flex-col items-center space-y-3.5">
                <h3 className="text-lg lg:text-2xl font-semibold text-center">Get the B Labs newsletter!</h3>
            </div>
            <div className="w-full flex justify-center max-w-xs">
                <div className="flex min-w-full">
                    <input type="email" className="w-full p-2 rounded-l-lg outline-none pl-4 pr-5" placeholder="Enter email" />
                    <button className="text-white py-2 px-4 rounded-lg bg-red-700 -ml-3.5">Subscribe</button>
                </div>
            </div>
            <div className="w-full p-2.5 flex flex-col lg:flex-row lg:justify-between space-y-1.5 lg:space-y-0 max-w-6xl">
                <div className="space-y-1.5">
                    <div className="relative min-w-[75px]">
                        <Image src={"/red-logo.png"} width={75} height={75} alt="logo" />
                    </div>
                    <p className="p text-white hidden lg:block max-w-[250px]">
                        © Copyright 2023 B LABS All Rights Reserved 
                    </p>
                    <div className="lg:flex space-x-5 items-center hidden">
                        <Link href={"/"} className="relative min-w-[25px]">
                            <Image src={"/apple.png"} width={25} height={25} alt="logo" />
                        </Link>
                        <Link href={"/"} className="relative min-w-[25px]">
                            <Image src={"/twitter.png"} width={25} height={25} alt="logo" />
                        </Link>
                        <Link href={"/"} className="relative min-w-[25px]">
                            <Image src={"/linkedin.png"} width={25} height={25} alt="logo" />
                        </Link>
                        <Link href={"/"} className="relative min-w-[25px]">
                            <Image src={"/mark.png"} width={25} height={25} alt="logo" />
                        </Link>
                        <Link href={"/"} className="relative min-w-[25px]">
                            <Image src={"/discord.png"} width={25} height={25} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="text-white space-y-1">
                    <h2 className="font-semibold lg:text-lg">Site Map</h2>
                    <div><Link href={"/"} className="text-sm lg:text-base">About us</Link></div>
                    <div><Link href={"/"} className="text-sm lg:text-base">Services</Link></div>
                    <div><Link href={"/"} className="text-sm lg:text-base">Strategies</Link></div>
                </div>
                <div className="text-white">
                    <h2 className="font-semibold lg:text-lg">Information</h2>
                    <div><Link href={"/"} className="text-sm lg:text-base">Privacy policy</Link></div>
                    <div><Link href={"/"} className="text-sm lg:text-base">Cookies policy</Link></div>
                </div>
                <div className="text-white">
                    <h2 className="font-semibold lg:text-lg">Contact</h2>
                    <div><p className="text-sm lg:text-base">info@blabsresearch.com</p></div>
                </div>
                <div className="flex space-x-5 items-center lg:hidden">
                    <Link href={"/"} className="relative min-w-[25px]">
                        <Image src={"/apple.png"} width={25} height={25} alt="logo" />
                    </Link>
                    <Link href={"/"} className="relative min-w-[25px]">
                        <Image src={"/twitter.png"} width={25} height={25} alt="logo" />
                    </Link>
                    <Link href={"/"} className="relative min-w-[25px]">
                        <Image src={"/linkedin.png"} width={25} height={25} alt="logo" />
                    </Link>
                    <Link href={"/"} className="relative min-w-[25px]">
                        <Image src={"/mark.png"} width={25} height={25} alt="logo" />
                    </Link>
                    <Link href={"/"} className="relative min-w-[25px]">
                        <Image src={"/discord.png"} width={25} height={25} alt="logo" />
                    </Link>
                </div>
                <p className="p text-white block lg:hidden pt-5 text-sm lg:text-base">
                    © Copyright 2023 B LABS All Rights Reserved 
                </p>
            </div>
        </div>
    )
}