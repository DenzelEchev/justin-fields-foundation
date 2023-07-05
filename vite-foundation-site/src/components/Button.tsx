const Button = ({bName}:{bName: string}) => {
    return (
        <button className="self-center w-1/5 text-white border-2 border-white border-solid rounded"> { bName } </button>
    )
}

export default Button