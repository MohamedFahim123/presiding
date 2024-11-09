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
import { useAvailabilitiesStore } from '../../store/useAvailabilitiesStore';
import { useCitizenShipStore } from '../../store/useCitizenShipStore';
import { useCountriesStore } from '../../store/useCountriesStore';
import { useIndustriesStore } from '../../store/useIndustriesStore';
import { useLangStore } from '../../store/useLangStore';
import { useProjectTypesStore } from '../../store/useProjectTypesStore';
import { useSkillsStore } from '../../store/useSkillsStore';
import { useYearsOfExpStore } from '../../store/useYearsOfExpStore';
import { usePrimaryExpStore } from '../../store/usePrimaryExpStore';
import MyLoader from '../../components/myLoaderSec/MyLoader';
import { useEffect, useState } from 'react';
import MyPartnersSlider from '../../components/myPartinersSliderSec/MyPartnersSlider';

export default function MyHome() {
    const availabilitiesLoading = useAvailabilitiesStore(state => state.availabilitiesLoading);
    const citizenshipsLoading = useCitizenShipStore(state => state.citizenshipsLoading);
    const countriesLoading = useCountriesStore(state => state.countriesLoading);
    const industriesLoading = useIndustriesStore(state => state.industriesLoading);
    const langsLoading = useLangStore(state => state.langsLoading);
    const primaryExpLoading = usePrimaryExpStore(state => state.primaryExpLoading);
    const projectTypesLoading = useProjectTypesStore(state => state.projectTypesLoading);
    const skillsLoading = useSkillsStore(state => state.skillsLoading);
    const yearsOfExpLoading = useYearsOfExpStore(state => state.yearsOfExpLoading);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (
        availabilitiesLoading ||
        citizenshipsLoading ||
        countriesLoading ||
        industriesLoading ||
        langsLoading ||
        primaryExpLoading ||
        projectTypesLoading ||
        skillsLoading ||
        yearsOfExpLoading ||
        loading
    ) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHomeSlider btnVisibility={true} title={'Presiding Solutions'} overLayColor={''} heading={'We grow your business'} />
            <MyHomeTextInfo />
            <MyHomeOverview />
            <MyHomeServices />
            <MyHomePodacast />
            <MyHomeOurMission />
            <MyHomeIndustries />
            <MyPartnersSlider />
            <MyHomeInsights />
            <MyHomeJobs />
        </>
    );
};
