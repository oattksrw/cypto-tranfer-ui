import React from 'react'
import './style.scss'

const Tags = (props) => {
    const { tags } = props
    const totalTags = tags.length

    const onClick = (tagName) => {
        props.onClick(tagName)
    }

    return (
        <span>
            {tags.map((e, i) => {
                return <span key={`${e}_${i}`}>{totalTags-1 === i && ' and '}<span className='underline' onClick={() => onClick(e)}>{e}</span>{totalTags-1 !== i && ', '}</span>
            })}
        </span>
    )
}

Tags.defaultProps = {
    tags: [],
    onClick: () => {}
}

export default Tags