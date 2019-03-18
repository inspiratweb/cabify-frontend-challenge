import React, { useState } from 'react'
import classnames from 'classnames'

const PrefixComponent = ({ currentInput, name, phonePrefixes, FlagIcon, prefixCurrent, updateCurrentInput, handlerChangeSelectPrefix }) => {
    const [open, setOpen] = useState(false)
    
    const updateCurrentInputWithKeybord = (e) => {
        if (e.keyCode === 38) {
            const index = phonePrefixes.findIndex(i => i.prefix === prefixCurrent) - 1
            const update = phonePrefixes.find((item, idx) => idx === index) || phonePrefixes[0]
            handlerChangeSelectPrefix({ prefixCurrent: update.prefix })
        }
        else if (e.keyCode === 40) {
            const index = phonePrefixes.findIndex(i => i.prefix === prefixCurrent) + 1
            const update = phonePrefixes.find((item, idx) => idx === index) || phonePrefixes[phonePrefixes.length - 1]
            handlerChangeSelectPrefix({ prefixCurrent: update.prefix })
        } else if (e.keyCode === 13) {
            setOpen(false)
        }
    }

    return (
        <div
            onKeyDown={(e) => updateCurrentInputWithKeybord(e)}
            onClick={() => open === false ? setOpen(true) : setOpen(false)}
            className={classnames('formField-select col col3',
                { 'active': currentInput === name || prefixCurrent.length > 1 },
                { 'focus': currentInput === name })}>

            {/* SELECT */}
            <div className="select">
                <input
                    id="phone_prefix"
                    type="text"
                    name="prefix"
                    value={prefixCurrent}
                    maxLength="4"
                    className="select-input"
                    onFocus={updateCurrentInput}
                />
                <label htmlFor="phone_prefix">Prefix</label>
                <div className={classnames('popup', { 'open': open })}>

                    <ul className="select-group-list">
                        {phonePrefixes.map(option => {
                            return (
                                <div className="select-option-container" key={option.prefix}>
                                    <li
                                        key={option.prefix}
                                        className="select-option"
                                        id={option.prefix}
                                        onClick={() => handlerChangeSelectPrefix({ prefixCurrent: option.prefix })} >
                                        <span className="select-option-container-small" id={option.prefix}>
                                            <span className="select-option-span" id={option.prefix}></span>
                                            <FlagIcon
                                                className="select-option-flag"
                                                code={option.countryCode}
                                                size={20}
                                            />
                                            <span className={`select-option-country${prefixCurrent === option.prefix ? '-selected' : ''}`} id={option.prefix}>{option.country}</span>
                                        </span>
                                        <span className="select-option-prefix" id={option.prefix}>{option.prefix}</span>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PrefixComponent