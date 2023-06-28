import logo from "../assets/logo.jpeg"

const Footer = () => {
    return(
        <>
            <div className="w-1/2 border-t-2">
                <img src={logo} alt="" className="h-20 w-28 "/>
                <p className="text-sm">a tax-exempt, 501 (c)3 organization under the IRS. EIN 46-3915852</p>
            </div>
            <div className="w-1/2 pt-4 border-t-2 text-end">
                <p className="text-sm">Justin Fields Foundation</p>
                <p className="text-sm ">888-888-8888</p>
                <p className="text-sm ">contact@contactmail.com</p>
                <p className="text-sm">123 Candy Cane Lane</p>
                <p className="text-sm">North Pole, NP</p>
            </div>
        </>
    )
}

export default Footer