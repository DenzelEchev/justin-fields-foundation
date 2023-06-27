import logo from "../assets/logo.jpeg"

const Story = () => {
    return (
        <>
        <div className="">
            <h1 className="text-center xs:text-4xl xs:py-4 xs:font-medium">What we stand for</h1>
            <img src={logo} alt="" />
        </div>
        <div className="xs:text-xl xs:text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est iste veniam animi saepe ipsam tenetur placeat corrupti provident eaque magnam nesciunt harum modi, facere suscipit optio vero eligendi id?</p>
        </div>
        </>
    )
}

export default Story