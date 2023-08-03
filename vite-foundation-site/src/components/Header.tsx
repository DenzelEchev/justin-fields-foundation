'use client'
import { FC } from "react"
import { Navbar } from "flowbite-react"
import logo from "../assets/logo.jpeg"

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
                        active
                        href="#"
                    >
                        <p>
                            Our Mission
                        </p>
                    </Navbar.Link>

                    <Navbar.Link
                        href="#"
                    >
                        <p>
                            About
                        </p>
                    </Navbar.Link>

                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>

                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>

                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header