import { FC } from "react"
import logo from "../assets/logo.jpeg"

const Header:FC = () => {
    
    return(
            <img src={logo} className="w-32 h-24"></img>
    )
}

export default Header