import React, { Component } from 'react';

import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">by George Najm</div>
          <div className="footer-links">
            <a href="http://github.com/georgesco94">
              <i className="fab fa-github"></i></a>
            <a href="http://linkedin.com/in/george-najm-707003149/">
              <i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
