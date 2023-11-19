import React from "react";

const Profile = (props) => {
    return (
        <>
            <div id="profile-container">
                <div className="two-column-grid">
                    <div className="two-column-grid__column">
                        <h2 className="two-column-grid__column__title accent">
                            About Me
                        </h2>
                        <h3 className="two-column-grid__column__subtitle">
                            Software Engineer
                        </h3>
                        <p className="two-column-grid__column__body">
                            I am a talented and results-oriented aspiring
                            Software Developer with a passion for using my
                            technical skills to introduce innovative methods to
                            meet objectives. I’m living the dream. I’ve always
                            been a great problem solver, and a technophile
                            obsessed with the latest devices. Today, I’m working
                            from home as a software engineer for Road to Hire,
                            and I get to show off all these elements of who I
                            am. Software engineering was the right field for me.
                            Since then, I’m familiar with a variety of
                            programming languages, including JavaScript, React,
                            CSS, Node.js, and API development, but I’m always
                            adding new skills to my repertoire.
                        </p>
                        <ul className="two-column-grid__column__list">
                            <a href="https://www.instagram.com/v__atx/">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </a>
                            <a href="https://www.facebook.com/Ivanna13.monique">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-facebook"></i>
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/ivanna-m-contreras/">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                            <a href="https://github.com/IvannaTX">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-github"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div
                        className="two-column-grid__column"
                        style={{ marginBottom: "2rem" }}
                    >
                        <div className="two-column-grid__column__img__container">
                            <img
                                className="two-column-grid__column__img"
                                alt="profile"
                                src="https://avatars.githubusercontent.com/u/94860133?v=4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
