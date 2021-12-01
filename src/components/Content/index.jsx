import React, { useState, useMemo, useEffect } from 'react'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

import { formatCurrencyToNumber, formatCurrencyToString, timeRemains } from '../../helpers'

import styles from './content.module.scss'

const Content = ({ handleInvest, activeLoan }) => {

    const [error, setError] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [currentTime, setCurrentTime] = useState(parseInt(activeLoan.term_remaining))

    const timer = () => setCurrentTime(currentTime - 1000)

    useEffect(
        () => {
            if (currentTime <= 0) {
                return
            }
            const id = setInterval(timer, 1000)
            return () => clearInterval(id)
        },
        [currentTime]
    )

    timeRemains(currentTime)

    const availableNumber = useMemo(
        () => activeLoan ? formatCurrencyToNumber(activeLoan.available_amount) : 0,
        [activeLoan]
    )

    const handleError = (inputValue, currentValue) => {
        if (inputValue > currentValue) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const handleInputValue = (event) => {
        const { value } = event.target
        const valueNumber = formatCurrencyToNumber(value)
        handleError(valueNumber, availableNumber)
        setInputValue(formatCurrencyToString(valueNumber))
    }

    const clickButtonInvest = () => {
        handleInvest(activeLoan.id, formatCurrencyToNumber(inputValue))
        setInputValue('')
    }

    if (!activeLoan) {
        return null
    }
    
    return (
        <>
            <h2 className={styles.title}>
                {activeLoan.title}
            </h2>
            <p className={styles.subtitle}>Loan title you've clicked</p>
            <p className={styles.text}>
                Available:
                <span className={styles.BoldSpan}>
                    {activeLoan.available_amount}
                </span>
            </p>
            <p className={styles.text}>
                Loan ends in:
                <span className={styles.boldspan}>
                    {timeRemains(currentTime)}
                </span>
            </p>
            <p className={styles.text}>Investment amount (£)</p>
            <div className={styles.wrapper}>
                <form onSubmit={clickButtonInvest}>
                    <Input value={inputValue} placeholder="1,000" onChange={handleInputValue} type="text" error={error} className={styles.input}/>
                    <Button disabled={error || !inputValue}>
                        invest
                    </Button>
                </form>
                 {error ? (<span className={styles.error}>You can invest only { formatCurrencyToString(availableNumber) }</span>) : null}
            </div>
        </>
    )
}

export default Content