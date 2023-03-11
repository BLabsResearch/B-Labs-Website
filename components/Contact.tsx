export default function Contact() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex flex-col justify-center items-center space-y-3.5 pb-[80px]"
            id="contact">
            <h3 className="w-full text-2xl font-semibold text-white lg:text-3xl text-start sm:text-center">
                Contact
            </h3>
            <form action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post" className="max-w-2xl space-y-2.5">
                <div className="w-full flex flex-col sm:flex-row sm:space-x-2.5 space-y-2.5 sm:space-y-0">
                    <div className="flex-1 w-full">
                        <p className="text-white p sm:h-auto">Your name</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white"
                         name="name" placeholder="Robin Smith" required />
                    </div>
                    <input type="hidden" name="thankyou_url" value="https://blabsresearch.com/savedcontact"/>
                    <div className="flex-1 w-full">
                        <p className="text-white p sm:h-auto">Your mail *</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white"
                         name="email" placeholder="robin.smith@xyz.io" required />
                    </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row sm:space-x-2.5 space-y-2.5 sm:space-y-0">
                    <div className="flex-1 w-full">
                        <p className="text-white p">Discord handle</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white"
                         name="custom_street" placeholder="smith#1234" required />
                    </div>
                    <div className="flex-1 w-full">
                        <p className="text-white p">Organisation</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white"
                         name="custom_company" placeholder="ABC Ltd." required />
                    </div>
                </div>
                <div className="w-full flex flex-col space-y-2.5">
                    <p className="w-full text-white">Tell us about your problems and needs *</p>
                    <textarea className="w-full h-32 border-2 border-red-700 bg-transparent outline-none text-white rounded-md p-2.5"
                     name="custom_comment" placeholder="Hello..." required />
                </div>
                <input type="hidden" name="campaign_token" value="fN4Li" />
                <input type="hidden" name="start_day" value="0" />
                <div className="flex justify-center w-full">
                    <button className="bg-red-700 text-white px-3.5 py-2.5 rounded-lg font-semibold text-[14px]" type="submit">LET{"'"}S GO!</button>
                </div>
            </form>
        </div>
    )
}