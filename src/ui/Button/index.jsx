import styles from './button.module.scss'

const Button = (props) => {
    return (
        <button {...props} className={styles.button} data-testid='button'>{props.children}</button>
    )
}

export default Button