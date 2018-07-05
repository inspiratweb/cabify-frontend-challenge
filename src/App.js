import React, { Component } from 'react';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
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
            </div>
          </div>
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <div class="formField-input active focus col col12">
                <div class="input">
                  <input type="text" name="fullname" value="Laura Sánchez" />
                  <label for="fullname">Full name</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              {/* you probably need to add active/focus/disabled classNames */}
              <div class="formField-input col col12">
                <div class="input">
                  <input type="text" name="jobdescription" />
                  <label for="jobdescription">Job description</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <div class="col col3">
                {/* select field will be placed here */}
              </div>
              <div class="formField-input col col9">
                <div class="input">
                  <input type="tel" name="ponenumber" />
                  <label for="ponenumber">Phone number</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div class="formField-input col col12">
                <div class="input">
                  <input type="email" name="email" />
                  <label for="email">Email</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div class="formField-input active disabled col col12">
                <div class="input">
                  <input type="text" name="website" value="www.cabify.com" />
                  <label for="website">Website</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div class="formField-input active col col12">
                <div class="input">
                  <input type="text" name="address" value="Calle Pradillo 42. CP: 28002. Madrid" />
                  <label for="address">Address</label>
                </div>
              </div>
            </div>
            <div className="row row-separationHuge">
              <input className="button button-full button-primary disabled" type="submit" value="Request" />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default App;
