import logo from "../assets/logo.jpeg"

const Story = () => {
    return (
        <>
        <div className="flex flex-col items center">
            <h1 className="py-4 text-4xl text-center">What we stand for</h1>
            <img src={logo} alt="" />
        </div>
        <div className="py-10 text-center text-l lg:text-2xl lg:w-2/3 lg:mt-12">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est iste veniam animi saepe ipsam tenetur placeat corrupti provident eaque magnam nesciunt harum modi, facere suscipit optio vero eligendi id?</p>
        </div>
        </>
    )
}

export default Story