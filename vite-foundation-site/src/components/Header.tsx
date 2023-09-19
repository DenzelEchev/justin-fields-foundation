import { FC } from "react"
import { Navbar } from "flowbite-react"
import logo from "../assets/logo.jpeg"

const Header: FC = () => {

    return (
        <>
            <Navbar
                fluid
            >
                <Navbar.Brand>
                    <img src={logo} alt="" className="w-24 h-20" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link

                        href="#mission"
                    >
                        <p>
                            About Us
                        </p>
                    </Navbar.Link>

                    <Navbar.Link href="#legacy">
                        In The Community
                    </Navbar.Link>

                    <Navbar.Link href="#press">
                        Press
                    </Navbar.Link>

                    <Navbar.Link href="#donation">
                        Donate
                    </Navbar.Link>

                    <Navbar.Link href="#contactUs">
                        Contact Us
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header