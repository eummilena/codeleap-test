
type InputProps = React.ComponentProps<'input'> & {
    label: string;
}
const Input = ({ label, id, ...props }: InputProps) => {
    return (
        <div className="col">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...props} />
        </div>
    )
}

export default Input