import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cookies() {
    return(
        <div className="w-full bg-black min-h-screen space-y-[50px] flex flex-col items-center">
            <Head>
                <title>Cookies</title>
            </Head>
            <div className="w-full px-5 sm:px-8 lg:px-24 pt-8 "><Navbar /></div>
            <h1 className="text-[36px] md:text-[48px] leading-[52px] font-semibold text-white text-center px-5 sm:px-8 lg:px-24 pt-8 ">COOKIES POLICY</h1>
            <div className="text-white max-w-[838px] text-justify text-[16px] leading-[24px] space-y-5 px-5 sm:px-8 lg:px-24 pt-8 ">
                <p>
                    B Labs, (collectively “B Labs”, “us”, “we”, or “our”) is committed to protect the information of its users. 
                    When you visit our website at https://www.blabsresearch.com/ (“Website”), we and third parties may collect 
                    information from you automatically through cookies or similar technology in accordance with the cookies 
                    policy (“Policy”) outlined below.
                </p>

                <h2 className="text-white font-semibold">What are cookies</h2>

                <p>
                    Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour
                     information such as technical information, personal preferences, personalization of content, usage statistics,
                      links to social media platforms, access to user accounts. Cookies can improve your browsing experience by
                       allowing sites to remember your preferences.
                </p>


                <h2 className="text-white font-semibold">Cookies used</h2>

                <p>
                    Our Website may use its own and third party cookies to provide you with a better browsing experience, to share content on social 
                    media platforms and to obtain user statistics. The privacy implications of third party cookies may differ on each social media 
                    platform and will depend on the privacy settings you have chosen there.
                </p>

                <h2 className="text-white font-semibold">Cookies used by this website</h2>

                <p>
                    Cookies used by this Website only associate an anonymised user with the computer used. The information collected may 
                    involve tracking and recording user behaviour while interacting with the website, capturing how the website is viewed 
                    and used, to enable us to monitor and improve the user experience over time.
                </p>


                <h2 className="text-white font-semibold">Third party cookies</h2>

                <p>
                    We may receive information based on cookies from the third parties listed below. These third party sites process your information in 
                    accordance with their own cookies policies. You need to review these policies carefully before using their services as the privacy 
                    implications of third party cookies may differ on each social media platform and will depend on the privacy settings you have chosen on these platforms.

                    Google Analytics: stores cookies in order to compile statistics on the volume of traffic and number of visitors to this website together 
                    with other users and use related information.

                    Social media platforms: We maintain pages on social media platforms to which we provide links on our website. You or the platform providers, 
                    such as LinkedIn, Twitter or Discord may provide us with information through the social media platform.

                    Service providers: We rely on trusted third parties who assist us in providing the website for the purposes as set out in the privacy policy, 
                    which includes website analytics, hosting and cloud computing services and other administrative services, as well as providers facilitating 
                    our newsletter such as getresponse.com.

                    New functionalities and third party services: From time to time we may test new features or new third party services to adapt to our website. 
                    These temporary cookies may serve evaluation purposes to optimise user experience on our website.
                </p>

                <h2 className="text-white font-semibold">How we use cookies</h2>

                <p>
                    We uses cookies in a range of ways to improve your experience on our website, including:

                    Understand from what geographic location you access our website
                    Capture the use of the website to optimise user interaction and experience
                    Improve the speed / security of the site
                    Allow you to share pages with social media platforms and how you interact with them
                </p>

                <h2 className="text-white font-semibold">How to manage cookies</h2>

                <p>
                    You can adjust your setting to customize or not accept cookies. While normally the user can browse the website though 
                    without experiencing all its functionalities, in some cases the website features may not function as a result. Also, 
                    in some instances necessary cookies cannot be rejected. Further, there can be cases where choosing to not accept cookies 
                    may require the installation of cookies remembering your decision to not accept them.
                </p>

                <h2 className="text-white font-semibold">Contact us</h2>

                <p>
                    If you have any questions or comments about this Policy consult our privacy policy or refer to 
                    the “Contact us” section there to get in touch.
                </p>

                <h2 className="text-white font-semibold">Changes and updates to this Policy</h2>

                <p>
                    We will update this Policy from time to time. You are advised to review this Policy periodically for any changes. 
                    Changes to this Policy are effective when they are posted on this page. If we make material changes, we will let you know.
                </p>
            </div>
            <Footer />
        </div>
    )
}