import React from 'react'
// EXTERNAL MODULES
import { FlagIcon } from 'react-flag-kit'
// COMMON
import PHONE_PREFIX from './common/prefix'
// COMPONENTS
import { InputComponent, BussinessCardComponent, ButtonComponent, PrefixComponent } from './components'
// STYLES
import './styles/App.css'
// ASSETS
import cabifyLogo from './images/cabify-logo.svg'

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
      currentInput: '',
      prefixCurrent: '',
    }

    this.textInput = React.createRef()
  }

  emailValidate = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({ errors: { ...this.state.errors, email: false } })
    } else this.setState({ errors: { ...this.state.errors, email: true } })
  }

  phoneValidate = (phone) => {
    if (/^.[0-9]{8,}$/.test(phone)) {
      this.setState({ errors: { ...this.state.errors, phone: false } })
    } else this.setState({ errors: { ...this.state.errors, phone: true } })
  }

  handlerChangesInputs = (e) => {
    const { value, name } = e.target
    this.setState({ form: { ...this.state.form, [name]: value, } }, () => {
      const { errors, form } = this.state
      if (Object.values(errors).every(e => e === false) && Object.entries(form).map(i => i[1]).filter(i => typeof i === 'string').every(e => e.length >= 1)) {
        this.setState({ form: { ...this.state.form, valid: true } })
      } else this.setState({ form: { ...this.state.form, valid: false } })
    })
  }

  updateCurrentInput = ({ currentTarget: { name } }) => this.setState({ currentInput: name })

  handlerChangeSelectPrefix = ({ prefixCurrent }) => this.setState({ prefixCurrent })

  onSubmit = (e) => {
    e.preventDefault()
  }

  render = ({ form, form: { name, jobdescription, phone, email, address, valid }, errors, currentInput, prefixCurrent } = this.state) => {

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


            <div className="row row-separationMedium row-gutterMedium">
              {/* PREFIX PHONE NUMBER */}
              <PrefixComponent
                name={'prefix'}
                FlagIcon={FlagIcon}
                phonePrefixes={PHONE_PREFIX}
                phone={phone}
                currentInput={currentInput}
                prefixCurrent={prefixCurrent}
                errors={errors}
                updateCurrentInput={this.updateCurrentInput}
                handlerChangeSelectPrefix={this.handlerChangeSelectPrefix}
                phoneValidate={this.phoneValidate} />

              {/* INPUT PHONE NUMBER */}
              <InputComponent
                name={'phone'}
                label={'Phone Number'}
                type={'number'}
                stylesDefault={'formField-input col col9'}
                form={form}
                value={phone}
                errors={errors}
                currentInput={currentInput}
                handlerChangesInputs={this.handlerChangesInputs}
                updateCurrentInput={this.updateCurrentInput}
                phoneValidate={this.phoneValidate} />
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
