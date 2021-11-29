import './modal.scss'

const Modal = ({ children, isOpenModal, closeModal  }) => {
    return (
        <div isVisible={ isOpenModal } className="container" style={{ display: isOpenModal ? 'flex' : 'none' }}>
            <div onClick={ closeModal } className="overlay"/>
            <div className="modal">{isOpenModal && children}</div>
        </div>
    )
}

export default Modal;
