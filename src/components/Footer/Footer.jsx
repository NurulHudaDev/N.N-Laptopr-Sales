import React from 'react';
import'./Footer.css'
const Footer = () => {
    return (
        <footer className="footer-container">
      <div>
        <h3> Your Visit now</h3>
        <p>
          An "Account" represents your legal relationship with GitHub. A“
          Account”
        </p>
        <ul className="socials">
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/md-shipon-214207214/">
              <i class="fab fa-linkedin"></i>{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.facebook.com/mdshipon.chowdhury.940/">
              <i class="fab fa-facebook"></i>{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/SShipon">
              <i class="fab fa-github"></i>
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://m.me/mdshipon.chowdhury.940">
              <i class="fab fa-facebook-messenger"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2021 Webflow, Inc. All rights reserved by{" "}
          <span>shamsul islam shipon. </span>
        </p>
      </div>
    </footer>
    );
};

export default Footer;