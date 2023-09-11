import './button.css'

const Button = (props) => {
    const extend = () => {
        console.log(props.text);
    };
    return(
        <button
            className='button'
            onClick={extend}>
            {props.text}
        </button>
    )
}
export default Button;