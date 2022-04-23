import React from "react";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-social__icon__link__container">
                <a
                    className="footer-social__icon__link"
                    href="https://www.linkedin.com/in/ivanna-m-contreras/"
                >
                    <i className="footer-social__icon fab fa-linkedin"></i>
                </a>
                <a
                    className="footer-social__icon__link"
                    href="https://github.com/IvannaTX"
                >
                    <i className="footer-social__icon fab fa-github"></i>
                </a>
                <a
                    className="footer-social__icon__link"
                    href="https://www.instagram.com/v__atx/"
                >
                    <i className="footer-social__icon fab fa-instagram"></i>
                </a>
            </div>
            <p
                id="copyright"
                className="footer-link"
                style={{ marginTop: "2rem" }}
            >
                © 2022 Ivanna Monique Contreras
            </p>
        </footer>
    );
};

export default Footer;
