import { CheckCircleIcon } from "@heroicons/react/outline";
import Head from "next/head";
export default function Thankyou() {
    return(
        <div className="w-full h-screen bg-black">
            <Head>
                <title>Thank you</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex flex-col items-center justify-center w-full h-full space-y-2.5">
                <CheckCircleIcon className="w-40 h-40 text-red-700" />
                <h3 className="font-semibold text-center text-white h3">Thank you for subscribing to our newsletter</h3>
            </div>
        </div>
    )
}