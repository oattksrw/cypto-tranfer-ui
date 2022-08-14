import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'antd'
import { parseNumberFormat } from '../../utils/format'

const CardWidget = (props) => {
    const { imgUrl } = props
    const trickerState = useSelector(state => state.trickerReducer)
    const { currentTrickerData } = trickerState
    const { bidPrice, priceChange, volume } = currentTrickerData
    return (<div className='widget-card-container'>
        <Card title={<h1>THB/THB</h1>} extra={<img src={imgUrl} alt='nice' />}>

            <div className={'cost'}>
                <span>{(bidPrice || bidPrice === 0) ? parseNumberFormat(bidPrice) : ''}</span>
            </div>
            <div className={'volume'}>
                <span>volume: {(volume || volume === 0) ? parseNumberFormat(volume) : ''}</span>
                <span className={`${priceChange > 0 ? 'plus' : priceChange < 0 ? 'minus' : '' }`}>
                    {priceChange ? `${priceChange > 0 ? '+' : ''}${parseNumberFormat(priceChange)}` : ''}
                </span>
            </div>

        </Card>
    </div>

    )
}

CardWidget.defaultProps = {
    imgUrl: ''
}

export default CardWidget