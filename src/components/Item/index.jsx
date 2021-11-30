import Button from '../../ui/Button'
import styles from './item.module.scss'

const Item = ({ buttonOnClick, data }) => {

    const { id, title } = data

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.title}>loan name {id}</h2>
                {data.invested && (
                    <div className={styles.label}>Invested</div>
                )}
            </div>
            <div>Available amount: <b>{data?.available_amount}</b></div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {title}
                </p>
                <Button onClick={() => buttonOnClick(id)}>
                    Invest
                </Button>
            </div>
        </div>
    )
}

export default Item
