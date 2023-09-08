import { FaSquareThreads, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6"
import logo from "../assets/logo.jpeg"

const Footer = () => {
    return (
        <footer className="flex flex-col px-2">
            <div className="flex justify-center w-full py-2">
                <img src={logo} alt="" className="w-16 h-12 lg:w-32 lg:h-24" />
            </div>
            <div className="w-full py-2 text-center border-b-2">
                <p className="text-xs lg:text-md">Disclaimer Statement:
                    The Justin Fields Foundation is a Delaware limited liability corporation operating through a fiscal sponsorship with Players Philanthropy Fund, a Maryland charitable trust recognized by IRS as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code (Federal Tax ID: 27-6601178). Contributions to The Justin Fields Foundation qualify as tax-deductible to the fullest extent of the law.</p>
            </div>

            <div className="flex justify-between w-full px-2">
                <div className="flex flex-wrap py-4">
                    <h3 className="w-full pb-2 text-sm font-bold">Socials</h3>
                    <a target="_blank" href="https://www.instagram.com/justinfieldsfoundation/"><FaSquareInstagram size="3rem" className="pr-1 " /></a>
                    <a target="_blank" href="https://www.threads.net/@justinfieldsfoundation"><FaSquareThreads size="3rem" className="" /></a>
                    <a target="_blank" href="https://twitter.com/The_JFF1"><FaSquareXTwitter size="3rem" className="" /></a>
                </div>

                <div className="py-4 text-center">
                    <h3 className="pb-2 text-sm font-bold">Contact Us</h3>
                    <p className="text-sm lg:text- ">The Justin Fields Foundation</p>
                    <p className="text-sm lg:text- ">1720 Mars Hills Road</p>
                    <p className="text-sm lg:text-">Suite 124-206</p>
                    <p className="text-sm lg:text-">Acworth, GA 30101</p>
                    <a href="mailto:info@thejff.org" target="_blank" className="pt-2 text-sm font-bold">info@thejff.org</a>
                    <br />
                    <a href="mailto:joannfields@thejff.org" target="_blank" className="text-sm font-bold">joannfields@thejff.org</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer