import { FC } from "react"
type ButtonProps = {
    bName: string;
    bLink: string;
    bUrl: string;
}
const Button: FC<ButtonProps> = ({ bName, bLink, bUrl }) => {
    if (bUrl.trim() === "") {
        return (
            <a href={bLink} className="flex justify-center w-24 h-10 mt-2 font-bold text-white duration-300 border-2 border-white border-solid rounded hover:bg-white hover:text-black hover:ease-in">
                <button className="text-center"> {bName} </button>
            </a>
        );
    }

    return (
        <a target="_blank" href={bUrl} className="flex justify-center w-24 h-10 mt-2 font-bold text-white duration-300 border-2 border-white border-solid rounded hover:bg-white hover:text-black hover:ease-in">
            <button className="text-center"> {bName} </button>
        </a>
    )
}

export default Button