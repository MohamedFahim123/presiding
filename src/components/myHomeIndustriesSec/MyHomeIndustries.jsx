import './myHomeIndustries.css';
import startBg from '../../assets/home-industries/start.png';
import endBg from '../../assets/home-industries/end.png';
import IndustriesSlider from '../industriesSliderSec/IndustriesSlider';
import MyPartnersSlider from '../myPartinersSliderSec/MyPartnersSlider';

export default function MyHomeIndustries() {
  return (
    <div className='myIndustriesHome_handler'>
      <div className="container-fluid ms-0 me-0 ps-0 pe-0">
        <div className="myIndustriesHome__bg">
          <div className="row me-0">
            <div className="col-6 ms-0 me-0 pe-0">
              <div className="start__bg"
                style={{ backgroundImage: `url(${startBg})` }}
              >
                <h3>
                  Industries that we have catered to
                </h3>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>

              </div>
            </div>
            <div className="col-6 ms-0 ps-0 pe-0">
              <div className="end__bg"
                style={{ backgroundImage: `url(${endBg})` }}
              >
                <div className="container"></div>
              </div>
            </div>
          </div>
        </div>
        <IndustriesSlider />
        <MyPartnersSlider />
      </div>
    </div>
  )
}
