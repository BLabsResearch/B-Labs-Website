import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Policy() {
    return(
        <div className="w-full bg-black min-h-screen space-y-[50px] flex flex-col items-center">
            <Head>
                <title>Policy</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="w-full px-5 sm:px-8 lg:px-24 pt-8 "><Navbar /></div>
            <h1 className="text-[36px] md:text-[48px] leading-[52px] font-semibold text-white text-center px-5 sm:px-8 lg:px-24 pt-8 ">PRIVACY Policy</h1>
            <div className="text-white max-w-[838px] text-justify text-[16px] leading-[24px] space-y-5 px-5 sm:px-8 lg:px-24 pt-8 ">
                <p>
                    B Labs, collectively “B Labs”, “us”, “we”, or “our”, is committed to protecting the personal
                     data of its users, (collectively, “you” or “your”).
                </p>
                
                <p>
                    This privacy policy (“Policy”) describes how we collect, process, share and safeguard personal 
                    information that is collected through or in connection with our website.
                </p>

                <p>
                    It also tells you about your rights and choices with respect to your personal information, and how
                     you can contact us if you have any questions or concerns.
                </p>

                <p>
                    Please read this Policy carefully. If you do not agree with this Policy or any part thereof, you
                    should not access or use any part of the website. If you change your mind in the future, you must
                    stop using the website and you may exercise your rights in relation to your personal
                    information as set out in this Policy.
                </p>

                <p className="text-white font-semibold">Table of Contents</p>
                ‍
                <ul>
                    <li className="list-decimal">Personal information we collect</li>
                    <li className="list-decimal">How your personal information is used</li>
                    <li className="list-decimal">Retention of personal information</li>
                    <li className="list-decimal">Your rights and choices</li>
                    <li className="list-decimal">Privacy of Children</li>
                    <li className="list-decimal">Links to other sites</li>
                    <li className="list-decimal">Disclosure of information to third parties</li>
                    <li className="list-decimal">International data transfers</li>
                    <li className="list-decimal">Security of personal information</li>
                    <li className="list-decimal">Changes and updates to this privacy policy</li>
                    <li className="list-decimal">Complaints</li>
                    <li className="list-decimal">Contact us</li>
                </ul>

                <p className="text-white font-semibold">1. Personal information we collect</p>

                <p>
                    We, or a trusted third party provider used by us for this purpose, collect personal information about you from different 
                    sources listed below. In this Policy, “personal information” means any information related to an identified or identifiable 
                    individual, and does not include data whereby personally identifiable information has been removed (such as anonymous data).
                </p>
                
                <p>
                    Contact information: When you contact us through our website we may create an internal account as a means to organise, collect and manage your (user)name, pronouns, email address, country of residence, languages, and the message content you send us. You may also provide us with your LinkedIn profile, Github profile and/or Twitter handle and any other links you provide to us.
                    Correspondence and other communications: When you contact us via the website, email, online chat or video conference, social media or by other means, you provide us with personal information, such as your full name, email address, social media profile, telephone number and the content of your communications.
                </p>

                <p>
                    Newsletter: When you sign up to our newsletter you will submit your email address in the respective field on the website.
                    Wallet information. To allow any payments to be transacted, you may provide us with your ‘wallet address’ and other payment information such as the amount paid and the contribution. We rely on third party providers to process any payments.
                    Content you post on third party platforms: You may provide us with personal information such as content you post on third party platforms (including information about your interests and experience, profile information, status updates and information on a feed of activity), photos, location information, personal and business interests, memberships, skills, experiences and interests, personal websites resumes, job applications, comments and likes on other posts and any other information you share and post on such third party platform.
                    Education and professional information. When you apply for a job with us we may collect information about your educational and professional history and situation, such as your CV, current and previous employer and job title(s) and current and previous education and educational institution(s).
                    Career information. When you apply for a job with us we may collect your contact details and information about your educational and profession history and situation, such as your CV, current and previous employer and job title(s), current and previous education and educational institution(s) and any other information you submit to us in the context of your application.
                    Content you post on third party platforms: When you post content on third party platforms, you may provide us with personal information such as the content you post (including status updates and information on a feed of activity), resumes, job applications, comments and likes on other posts and any other information you share and post on such third party platform.
                    Surveys: We may offer you the opportunity to participate in surveys that we use to receive your feedback or for research and product improvement. We may also enable users to create governance posts that other users can vote on. When you agree to participate in such surveys, you provide us with personal information including the content of your responses.‍
                </p>

                <p>
                    <p>Information Collected via automated means</p>
                    <ul className="space-y-2.5">
                        <li className="list-disc">
                           Device data: We collect information about your device such as your computer’s or mobile device’s operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 4G), and general location information such as city, state or geographic area.
                        </li>
                        <li className="list-disc">
                            Usage data: When you access and use the website, we receive and store information about interactions with our website, including pages or screens you viewed, how long you spent on a page or screen, browsing history, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them.
                        </li>
                        <li className="list-disc">
                            We collect personal information automatically via cookies, pixel tags, local storage technologies, web beacons or similar technologies on our website (collectively referred to as “Cookies”), including for conducting analytics. For more information on our use of Cookies, please read our Cookies Policy.
                        </li>
                    </ul>

                    <div>
                        ‍<p>Information We Receive from Third Parties</p>
                        <p>
                            We receive personal information from the third parties below. They process your personal information in accordance with their own privacy policies. Please review these policies carefully before using their services.
                        </p>
                    </div>
                    
                    <ul className="space-y-2.5 mt-2.5">
                        <li className="list-disc">
                            Social media information: We maintain pages on social media platforms. You or the platform providers, such as LinkedIn, Twitter or Discord may provide us with information through the social media platform. We will treat such information in accordance with this Policy.
                        </li>
                        <li className="list-disc">
                            Blockchain: With your permission, B Labs may collect personal information about you from a (public) blockchain. In essence, a blockchain is a shared and synchronised digital database that is stored on multiple nodes (computers that store a local version of the database). As, by design, data on a blockchain cannot be changed or deleted, your ability to exercise your data protection rights such as your right to erasure, or your rights to object or restrict processing with respect to on-chain personal information may be affected. Note that whilst B Labs is responsible for the personal information that it collects from such blockchain, and will treat such personal information in accordance with this Policy, B Labs is not responsible for the personal information on the blockchain itself. B Labs will under no circumstances write your personal information onto the blockchain.
                        </li>
                        <li className="list-disc">
                            Other sources: We may receive personal information from other sources, such as public sources and information directories. If you apply for a job with us, we may receive information from you from your referees and recruitment agencies.
                        </li>
                    </ul>
                </p>

                <p>
                    <p className="text-white font-semibold">2. How your personal information is used</p>

                    ‍<p>We will use your personal information for one or more of the purposes set out below.</p>

                    <ul className="space-y-2.5 mt-2.5">
                        <li className="list-disc">
                            Correspondence and other communications. If you contact us, it is in our legitimate business interest to use your personal information to respond to your enquiries. The personal information we process when doing so includes your correspondence with us, your contact details, and to the extent applicable other personal information processed about you when you use our website.‍
                        </li>
                        <li className="list-disc">
                            Providing you with support and to respond to your requests and complaints. If you reach out to us for support, it is in our legitimate business interests to use your personal information to respond and resolve your queries and facilitate support. The personal information we process when doing so includes your correspondence with us, your contact details, and to the extent applicable other personal information processed about you when you use our website.
                        </li>
                        <li className="list-disc">
                            Sending you our newsletters and other marketing materials. If you sign up to our newsletter it is in our legitimate business interest to use your personal information in processing your request. The newsletter can include or consist of information and/or marketing materials on products and services we believe are of interest to you. This can include links to other sites. When using such links to other sites you are required to conduct your own due diligence. For further information see “Links to other sites”. The personal information we process when doing so include your name, your email address, and to the extent applicable other personal information processed about you when you use our website. You can unsubscribe from this newsletter or any marketing material you may receive from us at any time in the link provided. If you experience any problems, please contact us using the details in the “Contact us” section below.
                        </li>
                        <li className="list-disc">
                            To administer surveys. We may also use your personal information to contact you to administer a contest, survey or other feature we offer on our website.
                        </li>
                        <li className="list-disc">
                            Improve or monitor usage of our website and to protect, investigate and deter against fraudulent, harmful, unauthorised or illegal activity. It is in our legitimate interests to improve our website and customer service and to keep our website safe for our users, which includes conducting troubleshooting, testing and research and to keep the website secure. When doing so we may use personal information that we automatically collect about you such as usage and device information.
                        </li>
                        <li className="list-disc">
                            To monitor and analyse trends and use of our website. It is in our legitimate interests to analyse the use of our website. When doing so, we will process personal information that we automatically collect about you or that is generated about you when you use the website.
                        </li>
                        <li className="list-disc">
                            To personalise your experience and use of our website and our communications. It is in our legitimate interests to provide you with customised experiences and communications that may be relevant or of interest to you. For example, we may use your information to provide you with personalised and curated content on the website, based on your particular interests, skills, groups, languages and location. When doing so, we will process personal information and contact information, as well as personal information that we automatically collect about you.
                        </li>
                        <li className="list-disc">
                            To consider your application for a job with us. It is in our legitimate interest to process your personal information to consider your suitability for and contact you regarding open vacancies at B Labs.
                        </li>
                        <li className="list-disc">
                            To comply with legal obligations and to defend B Labs against legal claims or disputes. It is in our legitimate interests to ensure the integrity of our website and to defend ourselves against legal claims or disputes. Where we do so, we will use the personal information relevant to such a case. Some processing may also be necessary to comply with a legal obligation placed on B Labs, for example to keep records of transactions, or as requested by any judicial process or governmental agency.
                        </li>
                        <li className="list-disc">
                            For anonymisation and aggregation. It is in our legitimate interests to aggregate or anonymize personal information in a form that does not allow you to be personally identified and use the resulting information for statistical analysis regarding the use of the website, such as to better understand our customer base, or for other purposes. We only rely on legitimate interest as a legal basis when such legitimate interests are not overridden by your interests or your fundamental rights and freedoms and we ensure we comply with any request you make to exercise your rights.
                        </li>
                        <li className="list-disc">
                            If, where we are processing your personal information to perform our contract with you, you do not provide the personal information, we may not be able to conclude or fulfil such contract.
                        </li>
                    </ul>
                </p>

                <p>
                    <p className="text-white font-semibold">3. Retention of personal information</p>
                    ‍ <p>
                        We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected and processed, in accordance with our retention procedures, and in accordance with applicable laws or until you withdraw your consent (where applicable).
                    </p>
                    ‍
                    <p>
                        To determine the appropriate retention period for your personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorised use or disclosure of your personal information, the purposes for which we use your personal information and whether we can achieve those purposes through other means, and the applicable legal requirements.
                    </p>
                </p>

                <p className="space-y-2.5">

                    <p className="text-white font-semibold">4. Your rights and choices</p>

                    <p>B Labs would like to make sure you are fully aware of all of your data protection rights.</p>

                    <p>Depending on your location you may have the following rights, as provided under applicable law and subject to any limitations in such law:</p>

                    <p>access the personal information we hold about you. We reserve the right to charge you a small fee for this service. Such a fee would be communicated to you in advance of processing your request;</p>

                    <p>request we correct any inaccurate personal information we hold about you;</p>

                    <p>request we delete any personal information we hold about you;</p>

                    <p>restrict the processing of personal information we hold about you;</p>

                    <p>object to the processing of personal information we hold about you;</p>

                    <p>receive any personal information we hold about you in a structured and commonly used machine readable format or have such personal information transmitted to another company.</p>

                    <p>Please note that, prior to any response to the exercise of such rights, we will require you to verify your identity. You are entitled to exercise the rights described above free from discrimination. In addition, we may have valid legal reasons to refuse your request, and will inform you if that is the case. For more information on your rights, please contact us using the details in the “Contact us” section below.</p>

                    <p>Some internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to “Do Not Track” or similar signals. To find out more about “Do Not Track,” please visit http://www.allaboutdnt.com.</p>
                </p>

                <p className="space-y-2.5">
                   <p className="text-white font-semibold">5. Privacy of children</p>
                   <p>
                    Our website is not directed to children, and we do not knowingly collect personal information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us as set out in the “Contact us” section below. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
                   </p>
                </p>

                <p className="space-y-2.5">
                    <p className="text-white font-semibold">6. Links to other sites</p>
                    <p>
                        The B Labs website, including this Policy or its Cookies Policy, the newsletter or any marketing material you receive from us may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the privacy policy of every site you visit.
                    </p>
                    <p>We have no control over and assume no responsibility for the content, policies or practices of any third party sites or services.</p>
                </p>

                <p className="space-y-2.5">
                    <p className="text-white font-semibold">7. Disclosure of personal information to third parties</p>

                    <p>
                        We do not sell, trade, or otherwise transfer to third parties, your personal information, unless to the following recipients and in the following circumstances:
                    </p>

                    <p>
                        -Service Providers: We rely on trusted third parties who assist us in providing the website and for the purposes as set out above, providers of website analytics, hosting and cloud computing services and other administrative services, such as to facilitate and send our newsletter. These third parties may have access to or process your personal information as part of providing these services, and include Google Analytics, a web analytics service that tracks and reports website traffic;
                    </p>

                    <p>
                        - Service providers that provide payment, payroll and expense management, onboarding, governance services for DAOs and Web3 Communities.
                    </p>

                    <ul className="space-y-2.5">
                        <li className="list-disc">Affiliates: We may also share your personal information with our affiliated entities, for purposes consistent with this Policy.</li>
                        <li className="list-disc">Advisors: We work with various advisors, including tax consultants and legal advisors, with whom we may share your personal information.</li>
                        <li className="list-disc">Legal: We may also disclose your personal information to law enforcement agencies, regulatory bodies, public authorities or pursuant to the exercise of legal proceedings if we are legally required to do so, or if we believe, in good faith, that such disclosure is necessary to comply with the law, enforce our policies, to protect our or others’ rights, property or safety or for the purposes of preventing or detecting an unlawful act.</li>
                        <li className="list-disc">Business Transaction: Only if B Labs is involved in a merger, acquisition or asset sale, financing due diligence, reorganisation, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your personal information may be sold, transferred or otherwise shared including as part of any due diligence process.</li>
                    </ul>

                </p>

                <p className="space-y-2.5">

                    <p className="text-white font-semibold">8. International data transfers</p>
                    
                    <p>
                        We may transfer your personal information to countries outside of the EEA or the UK, which may not provide the same protections as the data protection laws where you are based. When we do so, we will ensure that relevant safeguards are in place to afford adequate protection for your personal information and we will comply with applicable data protection laws, in particular if you reside in the EEA or the UK by relying on a European Commission adequacy decision or adequacy regulation by the UK government, on contractual protections for the transfer of your personal information or a derogation if available. For more information about how we transfer personal information internationally, please contact us as set out in the “Contact us” section below.
                    </p>
                    
                </p>

                

                ‍ <p className="space-y-2.5">

                 <p className="text-white font-semibold">9. Security of personal information</p>

                ‍ <p>
                    We use reasonable organisational, technical and administrative measures designed to protect against unauthorised access, misuse, loss, disclosure, alteration and destruction of personal information we process. Unfortunately, data transmission over the internet cannot be guaranteed as completely secure. Therefore, while we strive to protect your personal information, we cannot guarantee its security.
                 </p>
                
                </p>
                
                <p className="space-y-2.5">
                 <p className="text-white font-semibold">10. Changes and updates to this Policy</p>
                 <p>
                    We will update this Policy from time to time. You are advised to review this Policy periodically for any changes. 
                    Changes to this Policy are effective when they are posted on this page. If we make material changes, we will let you know.
                    Last updated: 16th January 2023
                 </p>
                </p>
                
                <p className="space-y-2.5">
                 <p className="text-white font-semibold">11. Complaints</p>

                ‍ <p>If you have a concern about our privacy practices, including the way we handle your personal information, please contact us at privacy@blabsresearch.com. We will endeavour to respond to your complaint as soon as possible. You can also report it to the data protection authority that is authorised to hear those concerns.</p>
                
                </p>
<p className="space-y-2.5">
                <p className="text-white font-semibold">12. Contact us</p>
                <p>B Labs is the entity responsible for the processing of your personal information in connection with the website, and is the data controller in respect of such processing.</p>
                <p>If you have any questions or comments about this Policy, our privacy practices, or if you would like to exercise your rights with respect to your personal information, please contact us by email at: privacy@blabsresearch.com.</p>
</p>
            </div>
            <Footer />
        </div>
    )
}
