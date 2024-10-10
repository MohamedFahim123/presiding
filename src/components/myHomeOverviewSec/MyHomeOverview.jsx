import './myHomeOverview.css'
import bg1 from '../../assets/home-overview/Mask group.png'
import bg2 from '../../assets/home-overview/Mask group (1).png'
import bg3 from '../../assets/home-overview/Mask group (2).png'
import bg4 from '../../assets/home-overview/Mask group (3).png'
import bg5 from '../../assets/home-overview/Mask group (4).png'
import logo from '../../assets/logos/presiding-nav-logo.png'
export default function MyHomeOverview() {
    return (
        <div className='myHomeOverview__handler'>
            <div className='container-fluid'>
                <div className="row fullOverview_items">
                    <div className="col-lg-6 col-md-6 mb-3 ps-0 removeMarginRight">
                        <div className="overview_item">
                            <img src={bg1} alt="bg-1" />
                            <div className="overview_info">
                                <img src={logo} alt="logo" />
                                <p>
                                    we provide each client with quality services that are responsive, effective and tailored our client’s needs and their business.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-3 ps-0 ">
                        <div className="row">
                            <div className="col-6 pe-0 mb-3">
                                <div className="overview_item item_small">
                                    <img src={bg2} alt="bg-1" />
                                </div>
                            </div>
                            <div className="col-6 pe-0 mb-3">
                                <div className="overview_item item_small">
                                    <div className="overflow"></div>
                                    <img src={bg4} alt="bg-1" />
                                    <div className="overview_info hasIcon">
                                        <p>
                                            Company<br/>
                                            Growth<br/>
                                            Objective
                                        </p>
                                        <i className="bi bi-arrow-bar-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 pe-0">
                                <div className="overview_item item_small">
                                    <div className="overflow bg_color"></div>
                                    <img src={bg3} alt="bg-1" />
                                    <div className="overview_info hasIcon">
                                        <p>
                                        Presiding,<br/> Leading Your Vision<br/> to Success
                                        </p>
                                        <i className="bi bi-arrow-bar-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 pe-0">
                                <div className="overview_item item_small">
                                    <img src={bg5} alt="bg-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
