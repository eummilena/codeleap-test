type ButtonProps = React.ComponentProps<'button'>

const Button = ({ className, children, ...props }: ButtonProps) => {
    return (

        <button className={className} {...props}>{children}</button>
    )
}

export default Button