import React from 'react'

const Notification = ({msg, style}) => {
    if(msg === null)
        return null
    return(
        <div style={style}>
            {msg}
        </div>
    )
}

export default Notification