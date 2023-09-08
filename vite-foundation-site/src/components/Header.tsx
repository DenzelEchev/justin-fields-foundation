import { FC } from "react"
import { Navbar } from "flowbite-react"

const Header: FC = () => {

    return (
        <>
            <Navbar
                fluid
            >
                <Navbar.Brand>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        The Justin Fields Foundation
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link

                        href="#mission"
                    >
                        <p>
                            Our Mission
                        </p>
                    </Navbar.Link>

                    <Navbar.Link href="#legacy">
                        Our Impact
                    </Navbar.Link>

                    <Navbar.Link href="#donation">
                        Donate
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header