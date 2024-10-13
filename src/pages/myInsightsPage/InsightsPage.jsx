import MyHomeSlider from '../../components/myHomeSliderSec/MyHomeSlider';
import sliderImg1 from '../../assets/insightsPage/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyInsightsFiltersBar from '../../components/myInsightsFiltersBar/MyInsightsFiltersBar';
import FeaturedInsightsSec from '../../components/featuredInsightsSec/FeaturedInsightsSec';
import AllInsightsSec from '../../components/allInsightsSec/AllInsightsSec';
import { useState } from 'react';

export default function InsightsPage() {
    const [filter,setFilter] = useState({
        blog_category_id: '',
        industry_id: '',
    });

    return (
        <>
            <MyHomeSlider heading={'Explore Market Insights & Reports'} title={'Presiding Insights'} overLayColor={'#00000057'} sliderImg1={sliderImg1} />
            <MyInsightsFiltersBar setFilter={setFilter} filter={filter} />
            <FeaturedInsightsSec isSingleInsight={false} />
            <AllInsightsSec />
        </>
    );
};
