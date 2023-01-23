import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Footer() {
    return(
        <div className="w-full h-full lg:h-auto bg-[url('/footer.png')] bg-no-repeat bg-bottom bg-cover px-3.5 py-5 
            lg:px-10 lg:py-8 flex flex-col items-center justify-center space-y-5 pb-[80px]">
            <div className="flex flex-col items-center space-y-3.5 mt-[80px] mb-[40px]" id="newsletter">
                <h3 className="text-lg font-semibold text-center lg:text-2xl">Get the B Labs newsletter!</h3>
            </div>
            <div className="flex justify-center w-full max-w-xs">
                <form action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post"
                 className="flex min-w-full mb-[80px]">
                    <input type="email" className="w-full p-2 pl-4 pr-5 rounded-l-lg outline-none" placeholder="Enter email" name="email" />
                    <input type="hidden" name="campaign_token" value="fN4Li" />
                    <input type="hidden" name="start_day" value="0" />
                    <input type="hidden" name="thankyou_url" value="https://blabs.vercel.app/thankyou"/>
                    <button className="text-white py-2 px-4 rounded-lg bg-red-700 -ml-3.5" type="submit">Subscribe</button>
                </form>
            </div>
            <div className="w-full p-2.5 flex flex-col lg:flex-row lg:justify-between space-y-1.5 lg:space-y-0 max-w-6xl">
                <div className="space-y-1.5">
                    <div className="relative min-w-[75px]">
                        <Image src={"/red-logo.png"} width={75} height={75} alt="logo" />
                    </div>
                    <p className="p text-white hidden lg:block max-w-[250px]">
                        © Copyright 2023 B LABS All Rights Reserved 
                    </p>
                    <div className="items-center hidden space-x-5 lg:flex">
                        <Link legacyBehavior href={"https://medium.com/@BLabs"} className="relative min-w-[25px]">
                            <a target="_blank">
                                <Image src={"/apple.png"} width={25} height={25} alt="logo" />
                            </a>
                        </Link>
                        <Link legacyBehavior href={"https://twitter.com/blabsresearch"} className="relative min-w-[25px]">
                            <a target="_blank">
                                <Image src={"/twitter.png"} width={25} height={25} alt="logo" />
                            </a>
                        </Link>
                        <Link legacyBehavior href={"https://www.linkedin.com/company/blabsresearch"} className="relative min-w-[25px]">
                            <a target="_blank">
                                <Image src={"/linkedin.png"} width={25} height={25} alt="logo" />
                            </a>
                        </Link>
                        <Link legacyBehavior href={"https://substack.com/profile/119179729-b-labs"} className="relative min-w-[25px]">
                            <a target="_blank">
                                <Image src={"/mark.png"} width={25} height={25} alt="logo" />
                            </a>
                        </Link>
                        <Link legacyBehavior href={"/"} className="relative min-w-[25px]">
                            <a target="_blank">
                                <Image src={"/discord.png"} width={25} height={25} alt="logo" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="space-y-1 text-white">
                    <h2 className="font-semibold lg:text-lg">Site Map</h2>
                    <div><Link legacyBehavior href={"#about"} className="text-sm lg:text-base">About us</Link></div>
                    <div><Link legacyBehavior href={"#services"} className="text-sm lg:text-base">Services</Link></div>
                    <div><Link legacyBehavior href={"#strategies"} className="text-sm lg:text-base">Strategies</Link></div>
                </div>
                <div className="text-white">
                    <h2 className="font-semibold lg:text-lg">Information</h2>
                    <div><Link legacyBehavior href={"/"} className="text-sm lg:text-base">Privacy policy</Link></div>
                    <div><Link legacyBehavior href={"/"} className="text-sm lg:text-base">Cookies policy</Link></div>
                </div>
                <div className="text-white">
                    <h2 className="font-semibold lg:text-lg">Contact</h2>
                    <div><p className="text-sm lg:text-base">info@blabsresearch.com</p></div>
                </div>
                <div className="flex items-center space-x-5 lg:hidden">
                    <Link legacyBehavior href={"https://medium.com/@BLabs"} className="relative min-w-[25px]">
                        <a target="_blank">
                            <Image src={"/apple.png"} width={25} height={25} alt="logo" />
                        </a>
                    </Link>
                    <Link legacyBehavior href={"https://twitter.com/blabsresearch"} className="relative min-w-[25px]">
                        <a target="_blank">
                            <Image src={"/twitter.png"} width={25} height={25} alt="logo" />
                        </a>
                    </Link>
                    <Link legacyBehavior href={"https://www.linkedin.com/company/blabsresearch"} className="relative min-w-[25px]">
                        <a target="_blank">
                            <Image src={"/linkedin.png"} width={25} height={25} alt="logo" />
                        </a>
                    </Link>
                    <Link legacyBehavior href={"https://substack.com/profile/119179729-b-labs"} className="relative min-w-[25px]">
                        <a target="_blank">
                            <Image src={"/mark.png"} width={25} height={25} alt="logo" />
                        </a>
                    </Link>
                    <Link legacyBehavior href={"/"} className="relative min-w-[25px]">
                        <a target="_blank">
                            <Image src={"/discord.png"} width={25} height={25} alt="logo" />
                        </a>
                    </Link>
                </div>
                <p className="block pt-5 text-sm text-white p lg:hidden lg:text-base">
                    © Copyright 2023 B LABS All Rights Reserved 
                </p>
            </div>
        </div>
    )
}