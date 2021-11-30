import styles from './modal.module.scss'

const Modal = ({ children, isVisibleModal, closeModal  }) => {
    return (
        <div className={styles.container} style={{ display: isVisibleModal ? 'flex' : 'none' }} data-testid='modal'>
            <div onClick={ closeModal } className={styles.overlay}/>
            <div className={styles.modal}>{isVisibleModal && children}</div>
        </div>
    )
}

export default Modal
