import './myFooter.css'
import logo from '../../assets/footer-images/Presiding-logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { scrollToTop } from '../../functions/scrollToTop';

export default function MyFooter() {
    const [currData] = useFetch(`${baseUrl}/settings`);
    const navigate = useNavigate();
    const listFooterData = [
        {
            title: "Company",
            items: [
                {
                    name: 'Insights',
                    link: '/insights'
                },
                {
                    name: 'Services',
                    link: '/services'
                },
                {
                    name: 'Contact Us',
                    link: '/contact-us'
                }
            ],
        },
        {
            title: "Explore",
            items: [
                {
                    name: "Careers",
                    link: '/careers'
                },
                {
                    name: 'Client Portal',
                    link: '/client-portal'
                }
            ]
        },
    ];

    return (
        <div className='myFooterSec__handler'>
            <div className="footerOverlay"></div>
            <div className="container">
                <div className="footerTop__handler row justify-content-between">
                    <>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="myFooter_logo">
                                <img src={logo} alt="logo" className='cursorPointer' onClick={() => {
                                    navigate('/');
                                    scrollToTop();
                                }} />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="row">
                                {
                                    listFooterData.map((list, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-4 col-sm-12 adjustWidthInSm">
                                                <div className="footer__listBox">
                                                    <div className="footer__listBox__tit">
                                                        <h5>
                                                            {list.title}
                                                        </h5>
                                                        <ul>
                                                            {
                                                                list?.items?.map((item, idx) => {
                                                                    return (
                                                                        <li key={idx} onClick={() => {
                                                                            navigate(item?.link);
                                                                            scrollToTop();
                                                                        }} className='footer__listBox__items cursorPointer'>
                                                                            {item?.name}
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="col-lg-4 col-md-4 col-sm-12 adjustWidthInSm">
                                    <div className="footer__listBox lastListbox">
                                        <div className="footer__listBox__tit">
                                            <h5>
                                                Get In Touch
                                            </h5>
                                            <ul>
                                                {/* <li>
                                                    <span>Contact us:</span>
                                                    <NavLink to={`tel:${currData?.phone}`} className={'nav-link'}>
                                                        {currData?.phone}
                                                    </NavLink>
                                                </li> */}
                                                <li>
                                                    <span>Email:</span>
                                                    <NavLink to={`mailto:${currData?.email}`} className={'nav-link'}>
                                                        {currData?.email}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <span>Find Us Here:</span>
                                                    <NavLink to={currData?.instagram} className={'nav-link'}>
                                                        <i className="bi bi-instagram"></i>
                                                    </NavLink>
                                                    <NavLink to={currData?.facebook} className={'nav-link'}>
                                                        <i className="bi bi-facebook"></i>
                                                    </NavLink>
                                                    <NavLink to={currData?.twitter} className={'nav-link'}>
                                                        <i className="bi bi-twitter-x"></i>
                                                    </NavLink>
                                                    <NavLink to={currData?.linkedin} className={'nav-link'}>
                                                        <i className="bi bi-linkedin"></i>
                                                    </NavLink>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div className="footerBottom__handler row">
                    <div className="col-12">
                        <div className="footerBootom_Links">
                            <h5>
                                <NavLink className={'nav-link'}>
                                    Terms & Conditions
                                </NavLink>
                            </h5>
                            <span className='line'></span>
                            <h5>
                                <NavLink className={'nav-link'}>
                                    Privacy & Policy
                                </NavLink>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
