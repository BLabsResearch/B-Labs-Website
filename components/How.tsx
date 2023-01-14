import Image from "next/image";

export default function How() {
    return(
        <div className="w-full py-5 flex flex-col lg:flex-row-reverse items-center justify-center lg:px-24 space-y-4">
            <h3 className="font-semibold text-white text-2xl text-left w-full block lg:hidden px-5 sm:px-10">
                How we <span className="text-red-700">work</span>
            </h3>
            <div className="relative max-w-[280px] sm:max-w-[300px] lg:min-w-[300px] lg:max-w-[460px] lg:pr-10 px-5">
                <Image src={"/quant.png"} alt="" width={460} height={460} />
            </div>
            <div className="space-y-2.5 lg:max-w-[500px] lg:pl-10">
                <h3 className="font-semibold text-white text-3xl text-start hidden lg:block">
                    How we <span className="text-red-700">work</span>
                </h3>
                <div className="text-white space-y-4 px-10 sm:px-16 lg:px-0">
                    <ol className="list-disc space-y-1">
                        <li className="text-base">Hive talent and resources: utilising partnerships within and outside the web3 space to identify matching research talent, specialised target groups and reliable data sources.</li>
                        <li className="text-base">Analysis using original and secondary research, applying qualitative & quantitative methodologies.</li>
                        <li className="text-base">A constantly expanding proprietary database to provide additional insights.</li>
                    </ol>
                    <div className="w-full text-center lg:text-start">
                        <button className="py-2.5 px-4 sm:px-5 bg-red-700 text-sm text-white rounded-md font-semibold">Request further information</button>
                    </div>
                </div>
            </div>
        </div>
    )
}