import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFacebook from 'react-icons/lib/fa/facebook';

import styles from '../styles/components/landing-page.css';
import buttons from '../styles/buttons.css';
import forms from '../styles/forms.css';

const selectOptions = [
  { value: 'Utah - Salt Lake City', label: 'Salt Lake City' },
  { value: 'Utah - Utah Valley', label: 'Utah Valley' }
];

export default class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      location: null,
      region: null,
      showThanks: false,
      state: null,
      submitPossible: true
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({ submitPossible: false });

    const body = {
      email: this.state.email,
      region: this.state.region,
      state: this.state.state
    };

    axios.post('http://api.serenadedates.com/subscriber', body)
    .then(() => {
      this.setState({
        email: '',
        location: null,
        region: null,
        showThanks: true,
        state: null
      });
    })
    .catch((error) => {
      this.setState({ submitPossible: true });
      console.error('error submitting form: ', error);
    });
  }

  onLocationChange(location) {
    const locations = location.value.split(' - ');
    this.setState({
      location: location.value,
      region: locations[1],
      state: locations[0]
    });
  }

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.cover}>
          <div className={styles.content}>
            <img src="http://res.cloudinary.com/serenade-dates/image/upload/c_scale,h_40/v1471979581/logos/logo_light.png"
            className={styles.logo} />
            <div className={this.state.showThanks ? styles.hidden : ''}>
              <div className={styles.title}>Date Package Giveaways!</div>
              <div className={styles.subtitle}>
                Ready to go on dates you'll never forget? By joining our email list,
                you're entered to win a free date package for two every month.
              </div>
              <div className={styles.subtitle}>Date ideas and discounts sent weekly to all participants.</div>
              <form class={styles.signupForm} onSubmit={this.onFormSubmit}>
                <input
                  type="email"
                  className={`${forms.input} ${styles.email}`}
                  placeholder="Email"
                  onChange={(e) => this.onEmailChange(e)}
                  value={this.state.email} />
                <Select
                  className={forms.select}
                  value={this.state.location}
                  options={selectOptions}
                  onChange={this.onLocationChange}
                  placeholder="Select location..."
                  searchable={false}
                />
                <button
                  disabled={this.state.region && this.state.email && this.state.submitPossible ? false : true}
                  type="submit"
                  className={`${buttons.btnRed} ${styles.submit}`}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className={this.state.showThanks ? '' : styles.hidden}>
              <div className={styles.title}>Thanks for Signing Up!</div>
              <div className={styles.subtitle}>
                You're now automatically entered to win any giveaways in your area. Follow us on social for even more opportunities to win!
              </div>
              <a href="https://www.instagram.com/serenade_dates/" className={styles.socialIcon}>
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/serenadedates" className={styles.socialIcon}>
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
