import React from 'react'

const Filter = ({ filterName, setFilterName }) => (
    <div>
        filter shown with <input value={filterName} onChange={event => setFilterName(event.target.value)} />
    </div>
)

export default Filter