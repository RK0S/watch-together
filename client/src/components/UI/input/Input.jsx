
import classes from './input.module.css';

const Input = ({extraClass, ...props}) => {
    return (
        <input
            className={[classes.input, extraClass].join(' ')}
            {...props}
        />
    );
};

export default Input;
