export const formatCurrencyToString = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
 
export const formatCurrencyToNumber = (value) => {
    return Number(value.replace(/,/g, ''))
}
 
export const timeRemains = (value) => {
    let seconds = parseInt((value / 1000) % 60)
    let days = parseInt(seconds / (3600 * 24))
    let minutes = parseInt((value / (1000 * 60)) % 60)
    let hours = parseInt((value / (1000 * 60 * 60)) % 24)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    const dayShow = days > 0 ? days + (days === 1 ? ' day ' : ' days ') : ''
    const hourShow =
        hours > 0 ? hours + (hours === 1 ? 'hour ' : ' hours ') : ''
    const minuteShow =
        minutes > 0 ? minutes + (minutes === 1 ? 'min ' : ' min ') : ''
    const secondShow =
        seconds > 0 ? seconds + (seconds === 1 ? 'sec' : ' sec') : ' 00'

    return `${dayShow} ${hourShow} ${minuteShow} ${secondShow}`
}
 