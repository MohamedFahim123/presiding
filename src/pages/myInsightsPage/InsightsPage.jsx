import MyHomeSlider from '../../components/myHomeSliderSec/MyHomeSlider';
import sliderImg1 from '../../assets/insightsPage/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyInsightsFiltersBar from '../../components/myInsightsFiltersBar/MyInsightsFiltersBar';
import FeaturedInsightsSec from '../../components/featuredInsightsSec/FeaturedInsightsSec';
import AllInsightsSec from '../../components/allInsightsSec/AllInsightsSec';

export default function InsightsPage() {
    return (
        <>
            <MyHomeSlider heading={'Explore Market Insights & Reports'} title={'Presiding Insights'} overLayColor={'#00000057'} showBtn={false} sliderImg1={sliderImg1} sliderImg2={sliderImg1} />
            <MyInsightsFiltersBar />
            <FeaturedInsightsSec isSingleInsight={false} />
            <AllInsightsSec />
        </>
    );
};
