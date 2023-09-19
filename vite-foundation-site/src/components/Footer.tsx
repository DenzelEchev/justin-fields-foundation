import logo from "../assets/logo.jpeg"

const Footer = () => {
    return (
        <footer className="flex flex-col px-2">
            <div className="flex justify-center w-full py-2">
                <img src={logo} alt="" className="w-16 h-12 lg:w-32 lg:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center w-full py-2">
                <p className="w-3/4 text-sm font-bold text-center">Disclaimer Statement:
                    The Justin Fields Foundation is a Delaware limited liability corporation operating through a fiscal sponsorship with Players Philanthropy Fund, a Maryland charitable trust recognized by IRS as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code (Federal Tax ID: 27-6601178). Contributions to The Justin Fields Foundation qualify as tax-deductible to the fullest extent of the law.</p>
            </div>
        </footer>
    )
}

export default Footer