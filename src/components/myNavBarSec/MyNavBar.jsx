import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useLocation } from 'react-router-dom';
import main_logo from '../../assets/logos/Untitled-2-02.svg';
import { scrollToTop } from '../../functions/scrollToTop';
import './myNavBar.css';

export default function MyNavBar({ scrollToggle }) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const { pathname } = useLocation();
    const [navBarViewed, setNavBarViewed] = useState(true);

    function handleOffcanvasToggle() {
        setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    };

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };

    useEffect(() => {
        if (pathname.toLocaleLowerCase() === 'careers/fill-application-form' || pathname.toLocaleLowerCase().includes('careers/apply')) {
            setNavBarViewed(false);
        };
    }, [pathname]);

    return (
        <Navbar expand="lg" className={`nav__Bg ${(scrollToggle && navBarViewed) ? "nav__fixed py-3 navTransformationDown" : "nav__relative pb-3"} align-items-center`}>
            <Container>
                <Navbar.Brand className='d-flex align-items-center'>
                    <NavLink className='logo__text' to={`/`}>
                        <>
                            <img src={main_logo} alt="main-logo" style={{ transform: 'scale(1.5)', marginBottom: '-8px' }} />
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
                            to={`/about-us`}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                scrollToTop();
                            }}
                            aria-label="Close"
                            className={`nav-link nav__link__style`}
                            to={`/contact-us`}
                        >
                            Contact Us
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
                                to={`/client-portal`}
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
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style`}
                                    to={`/about-us`}
                                >
                                    About Us
                                </NavLink>
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
                                Contact Us
                            </NavLink>
                            <>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                    }}
                                    aria-label="Close"
                                    className={`nav-link nav__link__style sign__up__btn`}
                                    to={`/client-portal`}
                                >
                                    CLIENT PORTAL
                                </NavLink>
                            </>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

MyNavBar.propTypes = {
    scrollToggle: PropTypes.bool.isRequired,
};