import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const InputComponent = ({ name, value, label, type, currentInput, errors, handlerChangesInputs, updateCurrentInput, emailValidate, phoneValidate, form = {}, stylesDefault }) => {
    
    return (    
            <div className={classnames(stylesDefault,
                { 'focus': currentInput === name },
                { 'active': currentInput === name || value.length },
                { 'error input-error': errors.email && name === 'email' },
                { 'error input-error':  errors.phone && name === 'phone' }
            )}>

                <div className='input'>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={handlerChangesInputs}
                        onClick={updateCurrentInput}
                        onBlur={() => {
                            if(name === 'email') emailValidate(form.email)
                            if(name === 'phone') phoneValidate(form.phone)
                        }} />
                    <label htmlFor={name}>{label}</label>
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
    phoneValidate: PropTypes.func
}

InputComponent.defaultProps = {
    name: '',
    value: '',
    type: '',
    stylesDefault: '',
    currentInput: '',
    errors: [],
    handlerChangesInputs: () => null,
    emailValidate: () => null,
    phoneValidate: () => null,
}

export default InputComponent