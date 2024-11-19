import { useState } from 'react';
import './myNavBar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';
import main_logo from '../../assets/logos/presiding-nav-logo.png'
import PropTypes from 'prop-types';

export default function MyNavBar({ scrollToggle }) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    function handleOffcanvasToggle() {
        setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    };

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };

    return (
        <>
            <Navbar expand="lg" className={`nav__Bg ${scrollToggle ? "nav__fixed py-3 navTransformationDown" : "nav__relative pb-3"} align-items-center`}>
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavLink className='logo__text' to={`/`}>
                            <>
                                <img src={main_logo} alt="main-logo" />
                            </>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleOffcanvasToggle} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className='Navbar__Collapse__none__on__med'>
                        <Nav className="mx-auto" >
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className={`nav-link nav__link__style`}
                                to={`/`}>
                                home
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className={`nav-link nav__link__style`}
                                to={`/services`}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className={`nav-link nav__link__style`}
                                to={`/Careers`}
                            >
                                Careers
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className={`nav-link nav__link__style`}
                                to={`/insights`}
                            >
                                Insights
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className={`nav-link nav__link__style`}
                                to={`/contact-us`}
                            >
                                Contact
                            </NavLink>
                        </Nav>
                        <Nav>
                            <>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style sign__up__btn`}
                                    // to={`/client-portal`}
                                >
                                    CLIENT PORTAL
                                </NavLink>
                            </>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar" className='Navbar__offCanvas__none__on__lg' aria-labelledby="offcanvasNavbarLabel"
                        show={showOffcanvas}
                        onHide={handleOffcanvasToggle}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='offCanvas__head' id="offcanvasNavbarLabel">
                                <NavLink className='logo__text' to={`/`}>
                                    <>
                                        <img src={main_logo} alt="main-logo" />
                                    </>
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="OffcanvasBody__Scrollable">
                            <Nav className="mx-auto" >
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style`}
                                    to={`/`}>
                                    home
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style`}
                                    to={`/services`}>
                                    Services
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style`}
                                    to={`/Careers`}>
                                    Careers
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style`}
                                    to={`/insights`}>
                                    Insights
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style`}
                                    to={`/contact-us`}
                                >
                                    Contact
                                </NavLink>
                                <>
                                    <NavLink
                                        onClick={() => {
                                            scrollToTop();
                                        }}
                                        aria-label="Close"
                                        className={`nav-link nav__link__style sign__up__btn`}
                                        // to={`/client-portal`}
                                    >
                                        CLIENT PORTAL
                                    </NavLink>
                                </>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

MyNavBar.propTypes = {
    scrollToggle: PropTypes.bool.isRequired,
};