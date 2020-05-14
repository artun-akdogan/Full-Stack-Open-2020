import React from 'react'

const Notification = ({msg, styl}) => {
    if(msg === null)
        return null
    return(
        <div className={styl}>
            {msg}
        </div>
    )
}

export default Notification