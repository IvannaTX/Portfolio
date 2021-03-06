import React, { useEffect } from "react";
import Banner from "../../../src/Components/Banner/Banner";
import Footer from "../../../src/Components/Footer/Footer";
import profileImg from "../../../src/assets/images/profile.jpg";
import { Link } from "react-router-dom";
import Pdf from "../../../src/assets/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <>
            <>
                <aside className={props.toggleClass}>
                    <div id="Aside-banner">
                        <img
                            id="Aside-banner__img"
                            alt="profile"
                            src={profileImg}
                        />
                        <h2 id="Aside-banner__title">
                            Ivanna Monique Contreras
                        </h2>
                    </div>
                    <div id="Navigation">
                        <ul>
                            <Link to="/">
                                <li className="Navigation-item">
                                    <i className="fas fa-home"></i>{" "}
                                    <span onClick={props.toggleHandler}>
                                        Back To Home
                                    </span>
                                </li>
                            </Link>
                            <a
                                href={Pdf}
                                target="_blank"
                                onClick={props.toggleHandler}
                                rel="noreferrer"
                            >
                                <li className="Navigation-item">
                                    <i className="fa fa-file-pdf"></i>{" "}
                                    <span>Resume</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </aside>
                <div id="Main">
                    <Banner title="Projects" />
                    <div id="profile-container">
                        <div className="two-column-grid">
                            <div
                                className="two-column-grid__column"
                                data-aos="fade-right"
                            >
                                <h2 className="two-column-grid__column__title accent">
                                    {props.data.title}
                                </h2>
                                <hr
                                    className="border-line"
                                    style={{ marginBottom: 0 }}
                                />
                                <p className="two-column-grid__column__subtitle">
                                    {props.data.expanded.date}
                                </p>
                                <p
                                    className="two-column-grid__column__body"
                                    style={{
                                        fontWeight: "400",
                                        color: "#494747",
                                    }}
                                >
                                    {props.data.expanded.text}
                                </p>
                                <div id="two-column-grid__column__link__container">
                                    {props.data.expanded.repo !== undefined && (
                                        <a
                                            className="two-column-grid__column__link"
                                            href={props.data.expanded.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="btn">
                                                View Github
                                            </button>
                                        </a>
                                    )}

                                    {props.data.expanded.site !== undefined && (
                                        <a
                                            className="two-column-grid__column__link"
                                            href={props.data.expanded.site}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="btn">
                                                View Site
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div
                                className="two-column-grid__column"
                                data-aos="fade-left"
                            >
                                <div className="two-column-grid__column__img__container">
                                    <img
                                        className="two-column-grid__column__img"
                                        alt="profile"
                                        src={props.data.expanded.logo}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-page-container-grid">
                        <div className="product-page-container">
                            <h2
                                className="two-column-grid__column__title accent"
                                style={{
                                    marginTop: "2rem",
                                    marginBottom: "2rem",
                                    textAlign: "center",
                                }}
                            >
                                Overview
                            </h2>
                            <img
                                className="product-page-img-wide"
                                alt="Project"
                                src={props.data.expanded.images[0]}
                            />

                            {props.data.expanded.background !== undefined && (
                                <div
                                    className="product-page-container__body__container"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                >
                                    <h1 className="product-page-container__title accent">
                                        Background
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.background}
                                    </p>
                                </div>
                            )}
                        </div>

                        {props.data.expanded.images[1] !== undefined && (
                            <div className="product-page-container">
                                <img
                                    className="product-page-img-wide"
                                    alt="Project"
                                    src={props.data.expanded.images[1]}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                />

                                <div
                                    className="product-page-container__body__container"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                >
                                    <h1 className="product-page-container__title accent">
                                        {props.data.expanded.column1Title}
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.column1Text}
                                    </p>
                                </div>
                            </div>
                        )}

                        {props.data.expanded.images[2] !== undefined && (
                            <div className="product-page-container">
                                <div
                                    className="product-page-container__body__container"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                >
                                    <h1 className="product-page-container__title accent">
                                        {props.data.expanded.column2Title}
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.column2Text}
                                    </p>
                                </div>
                                <img
                                    className="product-page-img-wide"
                                    alt="Project"
                                    src={props.data.expanded.images[2]}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                />
                            </div>
                        )}

                        <h2
                            className="two-column-grid__column__title accent"
                            style={{
                                marginTop: "2rem",
                                marginBottom: "2rem",
                                textAlign: "center",
                            }}
                        >
                            Technologies
                        </h2>
                        <div
                            className="product-page-container-grid"
                            style={{ paddingTop: 0 }}
                        >
                            {props.data.expanded.frontend !== "" && (
                                <div className="product-page-container__body__container__grid">
                                    <h1 className="product-page-container__title accent">
                                        Frontend
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.frontend}
                                    </p>
                                </div>
                            )}
                            {props.data.expanded.backend !== "" && (
                                <div className="product-page-container__body__container__grid">
                                    <h1 className="product-page-container__title accent">
                                        Backend
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.backend}
                                    </p>
                                </div>
                            )}
                            <div className="project-navigation-container">
                                {props.data.id > 0 && (
                                    <Link
                                        className=""
                                        to={`${props.data.id - 1}`}
                                    >
                                        <button
                                            id="prev"
                                            className="project-navigation"
                                        >
                                            <i className="fas fa-arrow-left"></i>{" "}
                                            <span>Previous</span>
                                        </button>
                                    </Link>
                                )}
                                {props.data.id < props.length - 1 && (
                                    <Link
                                        className=""
                                        to={`${props.data.id + 1}`}
                                    >
                                        <button
                                            id="next"
                                            className="project-navigation"
                                        >
                                            <span>Next</span>{" "}
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
        </>
    );
};

export default Projects;
