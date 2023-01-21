import Image from "next/image";
import Link from "next/link";

export default function Partner() {
    return(
        <div className="w-full pt-16 pb-5 flex flex-col lg:flex-row items-center justify-center lg:px-24 space-y-4" id="about">
            <h3 className="font-semibold text-white text-2xl text-left w-full block lg:hidden px-5 sm:px-10">
                <span className="text-red-700">Your partner</span> for making the right decisions <span className="text-red-700">in web3</span>
            </h3>
            <div className="relative max-w-[280px] sm:max-w-[300px] lg:min-w-[300px] lg:max-w-[460px] lg:pr-10 px-5">
                <Image src={"/process.png"} alt="" width={460} height={460} />
            </div>
            <div className="space-y-2.5 lg:max-w-[500px] lg:pl-10">
                <h3 className="font-semibold text-white text-3xl text-start hidden lg:block">
                    <span className="text-red-700">Your partner</span> for making the right decisions <span className="text-red-700">in web3</span>
                </h3>
                <div className="text-white space-y-4 px-5 sm:px-16 lg:px-0">
                    <div className="space-y-2">
                        <p className="text-base">We are a decentralised web3 native entity providing you with the desired information for your business needs.</p>
                        <p className="text-base">Our onboarding identifies the most suitable methodology for your organisation and adapts the framework to your needs</p>
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