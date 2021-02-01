import React from 'react'

import './card.css'

const Card = ({children, size}) => {

    return (
        <div className={`card ${size}`}>
            {children}
        </div>
    )
}

export default Card
