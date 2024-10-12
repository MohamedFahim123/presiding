import './myHome.css';
import MyHomeSlider from '../../components/myHomeSliderSec/MyHomeSlider';
import MyHomeTextInfo from '../../components/myHomeTextInfoSec/MyHomeTextInfo';
import MyHomeOverview from '../../components/myHomeOverviewSec/MyHomeOverview';
import MyHomeServices from '../../components/myHomeServicesSec/MyHomeServices';
import MyHomePodacast from '../../components/myHomePodatcastSec/MyHomePodacast';
import MyHomeOurMission from '../../components/myHomeOurMissionSec/MyHomeOurMission';
import MyHomeIndustries from '../../components/myHomeIndustriesSec/MyHomeIndustries';
import MyHomeInsights from '../../components/myHomeInsightsSec/MyHomeInsights';
import MyHomeJobs from '../../components/myHomeJobsSec/MyHomeJobs';
import sliderImg1 from '../../assets/slider-bg/prx-img-07.png';

export default function MyHome() {
    return (
        <>
            <MyHomeSlider title={'Presiding Solutions'} overLayColor={false} heading={'We grow your business'} showBtn={true} sliderImg1={sliderImg1} />
            <MyHomeTextInfo />
            <MyHomeOverview />
            <MyHomeServices />
            <MyHomePodacast />
            <MyHomeOurMission />
            <MyHomeIndustries />
            <MyHomeInsights />
            <MyHomeJobs />
        </>
    )
}
