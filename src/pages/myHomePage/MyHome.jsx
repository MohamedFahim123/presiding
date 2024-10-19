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

export default function MyHome() {
    return (
        <>
            <MyHomeSlider btnVisibility={true} title={'Presiding Solutions'} overLayColor={''} heading={'We grow your business'} />
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
