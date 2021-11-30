import styles from './input.module.scss'

const Input = (props) => {
    return (
        <input {...props} className={styles.input} />
    )
}

export default Input