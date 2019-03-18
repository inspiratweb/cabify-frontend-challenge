import React from 'react'
import PropTypes from 'prop-types'

const BussinessCardComponent = ({ cabifyLogo, name, jobdescription, prefix, phone, website, address, email }) => (
    <article className="businessCard col col6">
        <figure className="businessCard-badge">
            <a className="businessCard-badge-logo" href="http://www.cabify.com">
                <img src={cabifyLogo} alt="Cabify" />
            </a>
        </figure>
        <h1 className="title-main">Request your business card</h1>
        <div className="businessCard-cards">
            <div className="businessCard-cardBack" />
            <div className="businessCard-cardFront">
                <div>
                    <p className="businessCard-cardFront-title">{name}</p>
                    <p className="businessCard-cardFront-subtitle">{jobdescription}</p>
                </div>
                <div className="businessCard-cardFront-bottom">
                    <p className="businessCard-icon-phone">{prefix} {phone}</p>
                    <p className="businessCard-icon-email">{email}</p>
                    <p className="businessCard-icon-website">{website}</p>
                    <p className="businessCard-icon-address">{address}</p>
                </div>
            </div>
        </div>
    </article>
)

BussinessCardComponent.PropTypes = {
    cabifyLogo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    jobdescription: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
}


BussinessCardComponent.defaultProps = {
    cabifyLogo: '',
    name: '',
    jobdescription: '',
    prefix: '',
    phone: '',
    website: '',
    address: '',
}

export default BussinessCardComponent