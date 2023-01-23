import Image from "next/image";
import Link from "next/link";

export default function Partner() {
    return(
        <div className="flex flex-col items-center justify-center w-full pt-16 pb-5 space-y-4 lg:flex-row lg:px-24" id="about">
            <h3 className="block w-full px-5 text-2xl font-semibold text-left text-white lg:hidden sm:px-10">
                <span className="text-red-700">Your partner</span> for making the right decisions <span className="text-red-700">in web3</span>
            </h3>
            <div className="relative max-w-[280px] sm:max-w-[300px] lg:min-w-[300px] lg:max-w-[460px] lg:pr-10 px-5">
                <Image src={"/process.png"} alt="" width={460} height={460} />
            </div>
            <div className="space-y-2.5 lg:max-w-[500px] lg:pl-10">
                <h3 className="hidden text-3xl font-semibold text-white text-start lg:block">
                    <span className="text-red-700">Your partner</span> for making the right decisions <span className="text-red-700">in web3</span>
                </h3>
                <div className="px-5 space-y-4 text-white sm:px-16 lg:px-0">
                    <div className="space-y-2">
                        <p className="text-base">We are a decentralised web3 native entity providing you with the desired information for your business needs.</p>
                        <p className="text-base">Our onboarding identifies the most suitable methodology for your organization and adapts the framework to your needs</p>
                        <p className="text-base">We work agile, ensuring results and meaningful, focused iterations.</p>
                    </div>
                    <div className="w-full text-center lg:text-start">
                        <Link href={"#contact"}>
                            <button className="py-2.5 px-5 bg-red-700 text-sm text-white rounded-md font-semibold text-[14px]">LET{"'"}S CONNECT</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}