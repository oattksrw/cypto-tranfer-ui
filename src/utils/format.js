export const parseNumberFormat = (num) => {
    return parseFloat(num).toLocaleString('en-US', {minimumFractionDigits: 2})
}

export const iconCurrency = {
    ['btc_thb']: 'https://storage.googleapis.com/satang-pro/public/assets/icons/coins/btc.png',
    ['busd_thb']: 'https://storage.googleapis.com/satang-pro/public/assets/icons/coins/busd.png',
    ['usdt_thb']: 'https://storage.googleapis.com/satang-pro/public/assets/icons/coins/usdt.png'
}