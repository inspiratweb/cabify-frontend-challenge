import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ButtonComponent = ({ stylesDefault, valid }) => (
    <div className="row row-separationHuge">
        <input
            className={classnames(stylesDefault,
                { 'disabled': !valid })}
            type="submit"
            value="Request" />
    </div>
)

ButtonComponent.PropTypes = {
    stylesDefault: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
}

ButtonComponent.defaultProps = {
    stylesDefault: 'button button-full button-primary',
    valid: false,
}

export default ButtonComponent