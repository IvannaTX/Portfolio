import React, { useEffect } from "react";
// Components
import Navigation from "../../../src/Components/Navigation/Navigation";
import Profile from "../../../src/Components/Profile/Profile";
import Projects from "../../../src/Components/Projects/Projects";
import Contact from "../../../src/Components/Contact/Contact";
import Footer from "../../../src/Components/Footer/Footer";
import Banner from "../../../src/Components/Banner/Banner";

import { Element } from "react-scroll";
import ContactForm from "../../Components/Contact/ContactForm";

const Home = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <aside className={props.toggleClass}>
                <Navigation toggleHandler={props.toggleHandler} />
            </aside>
            <div id="Main">
                <Banner title="Portfolio" />
                <Element name="profile-scroll">
                    <Profile />
                </Element>
                <Element name="projects-scroll">
                    <Projects
                        data={props.data}
                        startLoading={props.startLoading}
                        loadSetter={props.loadSetter}
                    />
                </Element>
                <Element name="contact-scroll">
                    <Contact />
                    {/* <ContactForm /> */}
                </Element>
                <Footer />
            </div>
        </>
    );
};

export default Home;
