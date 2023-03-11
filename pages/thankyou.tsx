import { CheckCircleIcon } from "@heroicons/react/outline";
import Head from "next/head";
export default function Thankyou({ query }: any) {
    if (query != "contact" && query != "newsletter") {
        if (typeof window != "undefined") {
            window.location.href = "/"
        }
    }
    return(
        <div className="w-full h-screen bg-black">
            <Head>
                <title>Thank you</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex flex-col items-center justify-center w-full h-full space-y-2.5">
                {(query == "contact" || query == "newsletter") && <CheckCircleIcon className="w-40 h-40 text-red-700" />}
                <h3 className="font-semibold text-center text-white h3">
                    {
                        query == "contact" && "Your response has been recorded"
                    }
                    {
                        query == "newsletter" && "Thank you or subscribing to our newsletter"
                    }
                </h3>
            </div>
        </div>
    )
}


export async function getServerSideProps({ query }: any) {
    const { saved } = query
    return {
      props: {
        query: saved
      },
    }
}