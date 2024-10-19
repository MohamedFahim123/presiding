import './myHomeOverview.css';
import logo from '../../assets/logos/presiding-nav-logo.png';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';

export default function MyHomeOverview() {
    const [currData] = useFetch(`${baseUrl}/sections`);

    return (
        <div className='myHomeOverview__handler'>
            <div className='container-fluid'>
                <div className="row fullOverview_items">
                    <div className="col-lg-6 col-md-6 mb-3 ps-0 removeMarginRight">
                        <div className="overview_item" onClick={()=> window.location.href = currData?.sections[0]?.link}>
                            <img loading='lazy'src={currData?.sections ? currData?.sections[0]?.image : ''} alt="background 1" />
                            <div className="overview_info">
                                <img loading='lazy' src={logo} alt="logo" />
                                <p>
                                    {currData?.sections ? currData?.sections[0]?.description : ''}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-3 ps-0">
                        <div className="row">
                            <div className="col-6 pe-0 mb-3">
                                <div className="overview_item item_small" onClick={()=> window.location.href = currData?.sections[1]?.link}>
                                    <img loading='lazy'src={currData?.sections ? currData?.sections[1]?.image : ''} alt="background 2" />
                                </div>
                            </div>
                            <div className="col-6 pe-0 mb-3">
                                <div className="overview_item item_small" onClick={()=> window.location.href = currData?.sections[2]?.link}>
                                    <div className="overflow"></div>
                                    <img loading='lazy'src={currData?.sections ? currData?.sections[2]?.image : ''} alt="bg-1" />
                                    <div className="overview_info hasIcon">
                                        <p>
                                            {currData?.sections ? currData?.sections[2]?.description : ''}
                                        </p>
                                        <i className="bi bi-arrow-bar-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 pe-0">
                                <div className="overview_item item_small" onClick={()=> window.location.href = currData?.sections[3]?.link}>
                                    <div className="overflow bg_color"></div>
                                    <img loading='lazy'src={currData?.sections ? currData?.sections[3]?.image : ''} alt="background 3" />
                                    <div className="overview_info hasIcon">
                                        <p>
                                            {currData?.sections ? currData?.sections[3]?.description : ''}
                                        </p>
                                        <i className="bi bi-arrow-bar-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 pe-0">
                                <div className="overview_item item_small" onClick={()=> window.location.href = currData?.sections[4]?.link}>
                                    <img loading='lazy'src={currData?.sections ? currData?.sections[4]?.image : ''} alt="background 4" />
                                    <div className="overview_info hasIcon">
                                        <p>
                                            {currData?.sections ? currData?.sections[4]?.description : ''}
                                        </p>
                                        <i className="bi bi-arrow-bar-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
