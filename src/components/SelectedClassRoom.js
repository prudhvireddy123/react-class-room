import React from 'react'
import PropTypes from 'prop-types'

function SelectedClassRoom(props) {
    const { name } = props
    const displayText = name ? `Selected Class room:${name}` : 'Please select class'
    return (
        <div className="selected-class">
            <p>{displayText}</p>
        </div>
    )
}

SelectedClassRoom.propTypes = {
    name: PropTypes.string
}

export default SelectedClassRoom

