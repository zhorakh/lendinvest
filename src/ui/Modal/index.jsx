import styles from './modal.module.scss'

const Modal = ({ children, isOpenModal, closeModal  }) => {
    return (
        <div isVisible={ isOpenModal } className={styles.container} style={{ display: isOpenModal ? 'flex' : 'none' }}>
            <div onClick={ closeModal } className={styles.overlay}/>
            <div className={styles.modal}>{isOpenModal && children}</div>
        </div>
    )
}

export default Modal
