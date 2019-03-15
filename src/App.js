import React from 'react'
import cabifyLogo from './images/cabify-logo.svg'
import classnames from 'classnames'
import './styles/App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        name: '',
        jobdescription: '',
        prefix: '+55',
        phone: '',
        email: '',
        website: 'www.cabify.com',
        address: '',
        valid: true,
      },
      errors: {},
      currentInput: ''
    }

    this.textInput = React.createRef()
    this.currentInput = this.currentInput.bind(this)
  }

  emailValidate = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({ errors: { email: false } })
    } else this.setState({ errors: { email: true } })
  }

  phoneValidate = (phone) => {
    if (/^.[0-9]{8,}$/.test(phone)) {
      this.setState({ errors: { phone: false } })
    } else this.setState({ errors: { phone: true } })
  }


  handlerChangesInputs = (e) => {
    const { value, name } = e.target
    this.setState({ form: { ...this.state.form, [name]: value, } })
  }

  currentInput({ currentTarget: { name } }) {
    this.setState({ currentInput: name })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { form: phone, email } = this.state
    console.log(this.state)
  }

  render() {
    const { form: { name, jobdescription, phone, email, address, valid }, errors, currentInput } = this.state

    return (
      <div className="mainWrapper row">
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
                <p className="businessCard-cardFront-title">Laura Sánchez</p>
                <p className="businessCard-cardFront-subtitle">Fronte</p>
              </div>
              <div className="businessCard-cardFront-bottom">
                <p className="businessCard-icon-phone">+34 </p>
                <p className="businessCard-icon-email"></p>
                <p className="businessCard-icon-website">www.cabify.com</p>
                <p className="businessCard-icon-address">Calle Pradillo 42. CP: 28002. Madrid</p>
              </div>
            </div>
          </div>
        </article>
        <article className="builder col col6">
          <form onSubmit={this.onSubmit} className="form">

            {/* NAME */}
            <div className="row">
              <div className={classnames('formField-input active col col12',
                { 'focus': currentInput === 'name' })}>

                <div className="input">
                  <input
                    className={classnames('form-control form-control-lg',
                      { 'active': currentInput === 'name' },
                      { 'focus': currentInput === 'name' })}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handlerChangesInputs}
                    onClick={this.currentInput} />
                  <label htmlFor="name">Full name</label>
                </div>

              </div>
            </div>

            {/* JOBDESCRIPTION */}
            <div className="row row-separationMedium">
              <div className={classnames('formField-input active col col12',
                { 'focus': currentInput === 'jobdescription' })}>

                <div className="input">
                  <input
                    className={classnames('form-control form-control-lg',
                      { 'active': currentInput === 'jobdescription' },
                      { 'focus': currentInput === 'jobdescription' })}
                    type="text"
                    name="jobdescription"
                    value={jobdescription}
                    onChange={this.handlerChangesInputs}
                    onClick={this.currentInput} />
                  <label htmlFor="jobdescription">Job description</label>
                </div>

              </div>
            </div>

            {/* PHONE NUMBER */}
            <div className="row row-separationMedium row-gutterMedium">
              <div className="col col3">
              </div>
              <div
                className={classnames('formField-input col col9',
                  { 'focus': currentInput === 'phone' },
                  { 'input-error': errors.phone })}>

                <div className='input'>
                  <input className={classnames('',
                    { 'active': currentInput === 'phone' },
                    { 'focus': currentInput === 'phone' })}
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={this.handlerChangesInputs}
                    onClick={this.currentInput}
                    onBlur={() => this.phoneValidate(phone)} />
                  <label htmlFor="phone">Phone number</label>
                </div>

              </div>
            </div>

            {/* EMAIL */}
            <div className="row row-separationMedium">
              <div
                className={classnames('formField-input col col12',
                  { 'focus': currentInput === 'email' })}>

                <div className='input'>
                  <input
                    className={classnames('input',
                      { 'active': currentInput === 'email' },
                      { 'focus': currentInput === 'email' })}
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handlerChangesInputs}
                    onClick={this.currentInput} />
                  <label htmlFor="email">Email</label>
                </div>

              </div>
            </div>

            {/* WEBSITE */}
            <div className="row row-separationMedium">
              <div className="formField-input active disabled col col12">
                <div className="input">
                  <input type="text" name="website" value="www.cabify.com" />
                  <label htmlFor="website">Website</label>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="row row-separationMedium">
              <div
                className={classnames('formField-input active col col12',
                  { 'focus': currentInput === 'address' })}>
                <div className="input">
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={this.handlerChangesInputs}
                    onClick={this.currentInput}
                  />
                  <label htmlFor="address">Address</label>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="row row-separationHuge">
              <input
                className={classnames('button button-full button-primary',
                  { 'disabled': !valid })}
                type="submit"
                value="Request" />
            </div>

          </form>
        </article>
      </div>
    )
  }
}

export default App
