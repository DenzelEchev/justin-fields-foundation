import { FC } from "react"
import { Navbar } from "flowbite-react"

const Header: FC = () => {

    return (
        <>
            <Navbar
                fluid
                rounded
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

                    <Navbar.Link href="#events">
                        Events
                    </Navbar.Link>

                    <Navbar.Link
                        href="#about"
                    >
                        <p>
                            About
                        </p>
                    </Navbar.Link>

                    <Navbar.Link href="#donation">
                        Donation
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header