import { useRouter } from "next/router"

interface Props {
    text: string,
    url: string
}

export default function Button({ text, url }: Props) {
    const router = useRouter()
    return(
        <button className="py-2.5 px-5 bg-red-700 text-white rounded-md font-semibold" onClick={() => {
            if (url) {
                router.push(url)
            }
        }}>{text}</button>
    )
}