
import classes from './button.module.css'

const Button = ({children, ...props}) => {
    console.log('btn')
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;