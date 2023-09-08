import { FC } from "react"
type ButtonProps = {
    bName: string;
    bLink: string;
    bUrl: string;
}
const Button: FC<ButtonProps> = ({ bName, bLink, bUrl }) => {
    if (bUrl.trim() === "") {
        return (
            <a href={bLink} className="flex justify-center w-24 h-10 mt-2 font-bold duration-300 border-2 border-black border-solid rounded hover:bg-gradient-to-r from-indigo-500 to-sky-500 hover:text-white hover:ease-in">
                <button className="text-center"> {bName} </button>
            </a>
        );
    }

    return (
        <a target="_blank" href={bUrl} className="flex justify-center w-24 h-10 mt-2 font-bold duration-300 border-2 border-black border-solid rounded hover:bg-gradient-to-r from-indigo-500 to-sky-500 hover:text-white hover:ease-in">
            <button className="text-center"> {bName} </button>
        </a>
    )
}

export default Button