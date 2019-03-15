import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const InputComponent = ({ name, value, label, type, currentInput, errors, handlerChangesInputs, updateCurrentInput, emailValidate, form = {}, stylesDefault }) => {

    return (
        <div className='row'>
            <div className={classnames(stylesDefault,
                { 'focus': currentInput === name },
                { 'active': currentInput === name || value.length },
                { 'error input-error': errors.email }
            )}>

                <div className='input'>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={handlerChangesInputs}
                        onClick={updateCurrentInput}
                        onBlur={() => emailValidate(form.email)} />
                    <label htmlFor={name}>{label}</label>
                </div>

            </div>
        </div>
    )
}

InputComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    stylesDefault: PropTypes.isRequired,
    currentInput: PropTypes.string.isRequired,
    form: PropTypes.object,
    errors: PropTypes.array.isRequired,
    handlerChangesInputs: PropTypes.func.isRequired,
    updateCurrentInput: PropTypes.func.isRequired,
    emailValidate: PropTypes.func,
}

InputComponent.defaultProps = {
    name: '',
    value: '',
    type: '',
    stylesDefault: '',
    currentInput: '',
    errors: [],
    handlerChangesInputs: () => null,
    currentInput: () => null,
    emailValidate: () => null
}

export default InputComponent