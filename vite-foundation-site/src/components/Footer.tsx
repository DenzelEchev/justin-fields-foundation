import logo from "../assets/logo.jpeg"

const Footer = () => {
    return(
        <>
            <div className="w-1/2 py-4 border-t-2">
                <img src={logo} alt="" className="h-20 w-28 "/>
                <p className="text-sm lg:text-md">a tax-exempt, 501 (c)3 organization under the IRS. EIN 46-3915852</p>
            </div>
            <div className="w-1/2 py-4 border-t-2 text-end">
                <p className="text-sm lg:text-">Justin Fields Foundation</p>
                <p className="text-sm lg:text- ">888-888-8888</p>
                <p className="text-sm lg:text- ">contact@contactmail.com</p>
                <p className="text-sm lg:text-">123 Candy Cane Lane</p>
                <p className="text-sm lg:text-">North Pole, NP</p>
            </div>
        </>
    )
}

export default Footer