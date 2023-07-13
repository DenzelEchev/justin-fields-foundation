const Button = ({bName}:{bName: string}) => {
    return (
        <button className="self-center w-1/5 text-white duration-300 border-2 border-white border-solid rounded hover:bg-white hover:text-black hover:ease-in"> { bName } </button>
    )
}

export default Button