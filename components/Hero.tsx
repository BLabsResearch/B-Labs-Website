import { SaveIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
    return(
        <div className="w-full h-screen bg-[url('/background.png')] bg-no-repeat bg-center bg-cover px-5 sm:px-8 lg:px-24 pt-8">
            <Navbar />
            <div className="relative mt-20 sm:mt-24">
                <div className="absolute w-full h-full top-[10%]">
                    <div className="space-y-5 text-xl text-center">
                        <h1 className="w-full text-2xl font-semibold text-center text-white sm:text-3xl lg:text-5xl">WE MAKE RESEARCH <span className="text-red-700">ACTIONABLE</span></h1>
                        <p className="text-white">by providing the highest quality research in web3</p>
                        <div className="flex flex-col items-center justify-center w-full pt-5 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                            <Link href={"https://docs.google.com/presentation/d/1OyJqYT6xU3e1H4COrHvOaRe0MDXMvgca/edit#slide=id.p1"}>
                                <button className="flex space-x-1 border-2 border-white p-2.5 rounded-lg items-center justify-center text-[14px] w-[182px]">
                                    <span>
                                        <SaveIcon className="w-6 h-6 text-white" />
                                    </span>
                                    <span className="text-white font-semibold text-[14px]">
                                        OUR PITCH DECK
                                    </span>
                                </button>
                            </Link>
                            <div>
                                <Button text="WATCH OUR VIDEO" url="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}