import React, { Component } from 'react';
import { HashLink as HLink } from 'react-router-hash-link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: 'Say hello',
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    let lastScrollY = window.scrollY;

    if (lastScrollY >= 60) {
      this.setState((state, props) => ({
        addClass: 'nav-sticky',
      }));
    } else {
      this.setState((state, props) => ({
        addClass: '',
      }));
    }
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
  };
  render() {
    let logoAlt = 'Blaze';

    return (
      <div>
        <nav
          className={`${this.state.addClass} navbar navbar-inverse navbar-expand-lg header-nav fixed-top header`}
        >
          <div className="container">
            <a className="navbar-brand logo" href="/">
              <img
                className="logo-dark"
                src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                alt={logoAlt}
              />
              <img
                className="logo-light"
                src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                alt={logoAlt}
              />
            </a>
            <button
              className="navbar-toggler pull-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCodeply"
              onClick={this.toggleMenu}
              style={{
                border: '1px solid #ffffff',
                backgroundColor: 'transparent',
                color: '#ffffff',
              }}
            >
              {this.state.isMenuOpen ? (
                <i
                  className="fa fa-times"
                  style={{ fontSize: '18px', color: '#ffffff' }}
                ></i>
              ) : (
                <i
                  className="fa fa-bars"
                  style={{ fontSize: '18px', color: '#ffffff' }}
                ></i>
              )}
            </button>

            <div
              className={`collapse navbar-collapse ${
                this.state.isMenuOpen ? 'show' : ''
              }`}
              id="navbarCodeply"
            >
              <ul className="nav navbar-nav ml-auto">
                <li>
                  <HLink
                    className="nav-link"
                    smooth
                    to={`/#home`}
                    onClick={this.closeMenu}
                  >
                    Home
                  </HLink>
                </li>
                <li>
                  <HLink
                    className="nav-link"
                    smooth
                    to={`/#features`}
                    onClick={this.closeMenu}
                  >
                    Services
                  </HLink>
                </li>
                <li>
                  <HLink
                    className="nav-link"
                    smooth
                    to={`/#about`}
                    onClick={this.closeMenu}
                  >
                    Work
                  </HLink>
                </li>
                <li>
                  <HLink
                    className="nav-link"
                    smooth
                    to={`/#about-us`}
                    onClick={this.closeMenu}
                  >
                    About us
                  </HLink>
                </li>
                <li>
                  <HLink
                    className="nav-link"
                    smooth
                    to={`/#contact`}
                    onClick={this.closeMenu}
                  >
                    Contact
                  </HLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
