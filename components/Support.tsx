import Image from "next/image";

export default function Support() {
    return(
        <div className="w-full flex flex-col items-center space-y-5 px-5 pt-10">
            <h3 className="font-semibold text-white text-2xl lg:text-3xl text-left w-full md:pl-14 lg:text-center lg:pl-0">
                How we can <span className="text-red-700">support you</span>
            </h3>
            <p className="text-white text-left w-full md:pl-14 lg:text-center lg:pl-0">with our selection of research services:</p>
            <div className="max-w-6xl grid sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5">
                <div className="w-[300px] lg:w-[350px] h-auto border border-white rounded-lg p-3.5 lg:p-5 space-y-5 flex flex-col">
                    <Image src={"/charts.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Analysis</h4>
                    <p className="p text-white flex-1">
                        Data driven research, including  tokenomics modelling, on- chain analysis and data driven marketing research
                    </p>
                    <button className="bg-red-700 p-2.5 text-white w-full rounded-lg font-semibold">WANT TO KNOW MORE</button>
                </div>
                <div className="w-[300px] lg:w-[350px] h-auto border border-white rounded-lg p-3.5 lg:p-5 space-y-5 flex flex-col">
                    <Image src={"/write.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Reports</h4>
                    <p className="p text-white flex-1">
                        In-depth research reports covering web3 topics  that are key to operating successfully in web3
                    </p>
                    <button className="bg-red-700 p-2.5 text-white w-full rounded-lg font-semibold">WANT TO KNOW MORE</button>
                </div>
                <div className="w-[300px] lg:w-[350px] h-auto border border-white rounded-lg p-3.5 lg:p-5 space-y-5 flex flex-col">
                    <Image src={"/advisory.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Advisory</h4>
                    <p className="p text-white flex-1">
                        Providing light-touch research to address your project or campaign needs in web3
                    </p>
                    <button className="bg-red-700 p-2.5 text-white w-full rounded-lg font-semibold">WANT TO KNOW MORE</button>
                </div>
            </div>
        </div>
    )
}