import React from 'react'
import cabifyLogo from './images/cabify-logo.svg'
import classnames from 'classnames'
import { InputComponent, BussinessCardComponent, ButtonComponent } from './components'
import './styles/App.css'

class App extends React.PureComponent {
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
        valid: false,
      },
      errors: {
        email: false,
        phone: false,
      },
      currentInput: ''
    }

    this.textInput = React.createRef()
  }

  emailValidate = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({ errors: { email: false } })
    } else this.setState({ errors: { email: true } })
  }

  phoneValidate = () => {
    if (/^.[0-9]{8,}$/.test(this.state.form.phone)) {
      this.setState({ errors: { phone: false } })
    } else this.setState({ errors: { phone: true } })
  }

  handlerChangesInputs = (e) => {
    const { value, name } = e.target
    this.setState({ form: { ...this.state.form, [name]: value, } })
  }

  updateCurrentInput = ({ currentTarget: { name } }) => this.setState({ currentInput: name })

  onSubmit = (e) => {
    e.preventDefault()
    const { form: phone, email } = this.state
    console.log(this.state)
  }

  render = ({ form, form: { name, jobdescription, phone, email, address, valid }, errors, currentInput } = this.state) => {

    return (
      <div className="mainWrapper row">

        {/* BUSSINESS CARD */}
        <BussinessCardComponent cabifyLogo={cabifyLogo} {...form} />

        <article className="builder col col6">

          <form onSubmit={this.onSubmit} className="form">

            {/* NAME */}
            <InputComponent
              name={'name'}
              label={'Full name'}
              type={'text'}
              stylesDefault={'formField-input col col12'}
              form={form}
              value={name}
              errors={errors}
              currentInput={currentInput}
              updateCurrentInput={this.updateCurrentInput}
              handlerChangesInputs={this.handlerChangesInputs} />


            {/* JOBDESCRIPTION */}
            <InputComponent
              name={'jobdescription'}
              label={'Job description'}
              type={'text'}
              stylesDefault={'formField-input col col12'}
              form={form}
              value={jobdescription}
              errors={errors}
              currentInput={currentInput}
              updateCurrentInput={this.updateCurrentInput}
              handlerChangesInputs={this.handlerChangesInputs} />

            {/* PHONE NUMBER */}
            <div className="row row-separationMedium row-gutterMedium">
              <div className="col col3">
              </div>
              <div
                className={classnames('formField-input col col9',
                  { 'focus': currentInput === 'phone' },
                  { 'active': currentInput === 'phone' },
                  { 'input-error': errors.phone })}>

                <div className='input'>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={this.handlerChangesInputs}
                    onClick={this.currentInput}
                    onBlur={() => this.phoneValidate} />
                  <label htmlFor="phone">Phone number</label>
                </div>

              </div>
            </div>

            {/* EMAIL */}
            <InputComponent
              name={'email'}
              label={'Email'}
              type={'text'}
              stylesDefault={'formField-input col col12'}
              form={form}
              value={email}
              errors={errors}
              currentInput={currentInput}
              handlerChangesInputs={this.handlerChangesInputs}
              updateCurrentInput={this.updateCurrentInput}
              emailValidate={this.emailValidate} />

            {/* WEBSITE */}
            <InputComponent
              name={'website'}
              label={'Website'}
              type={'text'}
              stylesDefault={'formField-input active disabled col col12'}
              value={'www.cabify.com'} />

            {/* ADDRESS */}
            <InputComponent
              name={'address'}
              label={'Address'}
              type={'text'}
              stylesDefault={'formField-input col col12'}
              form={form}
              value={address}
              errors={errors}
              currentInput={currentInput}
              handlerChangesInputs={this.handlerChangesInputs}
              updateCurrentInput={this.updateCurrentInput} />

            {/* BUTTON */}
            <ButtonComponent
              valid={valid}
              stylesDefault={'button button-full button-primary'} />

          </form>
        </article>
      </div>
    )
  }
}

export default App
