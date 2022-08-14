import React from 'react'
import { Card } from 'antd'
import './style.scss'

const CardChoie = (props) => {
    const { label, value, img_url } = props.data
    const onClick = () => {
        props.onClick(value)
    }

    return (<div className={`card-choice-container ${props.isActive && 'active'}`} onClick={onClick}>
        <Card>
            <div className='card-content'>
                <img src={img_url || ''} alt='nice' />
                <span className='text-choice'>{label}</span>
            </div>

        </Card>
    </div>)
}

CardChoie.defaultProps = {
    data: {
        label: '',
        value: '',
        img_url: ''
    },
    isActive: false,
    onClick: () => {}
   
}

export default CardChoie