import Image from "next/image";

export default function Rapidly() {
    return(
        <div className="w-full pt-16 pb-5 flex flex-col lg:flex-row items-center justify-center lg:px-24 space-y-4">
            <h3 className="font-semibold text-white text-2xl text-left w-full block lg:hidden px-5 sm:px-10">
                Web3 changes rapidly, <span className="text-red-700">we help you to stay on top</span>
            </h3>
            <div className="relative max-w-[280px] sm:max-w-[300px] lg:min-w-[300px] lg:max-w-[460px] lg:pr-10 px-5">
                <Image src={"/change.png"} alt="" width={460} height={460} />
            </div>
            <div className="space-y-2.5 lg:max-w-[500px] lg:pl-10">
                <h3 className="font-semibold text-white text-3xl text-start hidden lg:block">
                    Web3 changes rapidly, <span className="text-red-700">we help you to stay on top</span>
                </h3>
                <div className="text-white space-y-4 px-10 sm:px-16 lg:px-0">
                    <ol className="list-disc space-y-1">
                        <li className="text-base">Funding internal research teams requires significant time, resource and coordination commitments.</li>
                        <li className="text-base">Take advantage of a decentralized network of professional researchers who are experts in their field.</li>
                        <li className="text-base">Obtain insight-driven knowledge in a timely fashion to take advantage of time-sensitive opportunities.</li>
                    </ol>
                    <div className="w-full text-center lg:text-start">
                        <button className="py-2.5 px-5 bg-red-700 text-sm text-white rounded-md font-semibold">ASK US</button>
                    </div>
                </div>
            </div>
        </div>
    )
}