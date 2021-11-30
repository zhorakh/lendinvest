import React, { useState, useEffect, useMemo } from 'react'
import { formatCurrencyToNumber, formatCurrencyToString } from '../../helpers'
import currentLoans from '../../api/current-loans.json'
import Item from '../Item'
import Modal from '../../ui/Modal'
import Content from '../Content'
import styles from './list.module.scss'

const List = () => {
    const [loans, setLoans] = useState([])
    const [isDisplayedModal, setIsDisplayedModal] = useState(false)
    const [activeLoan, setActiveLoan] = useState(null)

    useEffect(() => {
        setLoans(currentLoans.loans)
    }, [])

    const totalAmount = useMemo(
        () => loans.reduce((acc, item) => {
            const available = formatCurrencyToNumber(item.available_amount)

            return acc + available
        }, 0),
        [loans],
    )

    const handleInvestModalOpen = (id) => {
        const loan = loans.find(item => item.id === id)

        if (!loan) {
            return
        }

        setActiveLoan(loan)
        setIsDisplayedModal(true)
    }

    const closeModal = () => {
        setIsDisplayedModal(false)
        setActiveLoan(null)
    }

    const handleInvest = (id, investValue) => {
        const newLoans = [...loans]
        const selectedIndex = newLoans.findIndex(item => item.id === id)

        if (selectedIndex === -1) {
            return
        }

        const oldAvailable = newLoans[selectedIndex].available_amount

        newLoans[selectedIndex].available_amount = formatCurrencyToString(formatCurrencyToNumber(oldAvailable) - investValue)
        newLoans[selectedIndex].invested = true

        setLoans(newLoans)
        closeModal()
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>current loans</h1>
                {loans.map(loan => (
                    <Item
                        key={loan.id}
                        data={loan}
                        buttonOnClick={handleInvestModalOpen}
                    />
                ))}
                <div className={styles.totaldata}>
                    Total amount available for investments:
                    <span className={styles.boldpsan}>{formatCurrencyToString(totalAmount)}</span>
                </div>
            </div>
            <Modal isOpenModal={isDisplayedModal} closeModal={closeModal}>
                <Content
                    handleInvest={handleInvest}
                    activeLoan={activeLoan}
                />
            </Modal>
        </>
    )
}

export default List
