import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Row, Col } from 'antd'
import * as actions from '../redux/actions/tricker.action'
import CardChoie from '../components/cards/CardChoie'
import CardWidget from '../components/cards/CardWidget'
import { CYPTO_CURRENCY_OPTION } from '../utils/option'
import { iconCurrency } from '../utils/format'
import './style.scss'

const MarketPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.trickerReducer)
    const { currentTrickerData, currentMode } = state
    let ticker24hrInterval;
    const getTricker = () => {
        dispatch(actions.onFetchTriker(id))
    }
    useEffect(() => {
        dispatch(actions.setCurrentMode(id))
        if (id) {
            getTricker()
            ticker24hrInterval = setInterval(() => {
                getTricker()
            }, 5000)
        }

        return () => {
            clearInterval(ticker24hrInterval)
        }
    }, [id])
    const onChoiceClick = (value) => {
        navigate(`/market/${value.toUpperCase()}`)
    }

    return (<div className='market-container'>
        <Row>
            <Col span={2} />
            <Col span={8}>

                {
                    CYPTO_CURRENCY_OPTION.map((item) =>
                        <CardChoie
                            key={`${item.value}`}
                            data={item}
                            isActive={currentMode?.toLocaleLowerCase() === item?.value ? true : false}
                            onClick={onChoiceClick}
                        />
                    )
                }
            </Col>
            <Col span={12}>
                {(id && currentTrickerData) &&
                    <CardWidget
                        price={currentTrickerData?.bidPrice}
                        volumn={currentTrickerData?.volume}
                        priceChange={currentTrickerData?.priceChange}
                        imgUrl={iconCurrency?.[id.toLocaleLowerCase()]}
                    />
                }
            </Col>
            <Col span={2} />
        </Row>
    </div>
    )
}

export default MarketPage