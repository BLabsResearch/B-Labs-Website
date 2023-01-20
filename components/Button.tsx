import { useRouter } from "next/router"

interface Props {
    text: string,
    url: string
}

export default function Button({ text, url }: Props) {
    const router = useRouter()
    return(
        <button className="p-2.5 bg-red-700 text-white rounded-md font-semibold text-[14px] w-[182px]" onClick={() => {
            if (url) {
                router.push(url)
            }
        }}>{text}</button>
    )
}