
type TextareaProps = React.ComponentProps<"textarea"> & {
    label: string;
};

const Textarea = ({ id, label, ...props }: TextareaProps) => {
    return (
        <div className="col">
            <label htmlFor={id}>{label}</label>
            <textarea
                name="content"
                rows={5}
                {...props}
                id={id}
            ></textarea>
        </div>
    )
}

export default Textarea