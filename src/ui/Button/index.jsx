import styles from './button.module.scss'

const Button = (props) => {
    return (
        <button {...props} className={styles.button}>{props.children}</button>
    )
}

export default Button