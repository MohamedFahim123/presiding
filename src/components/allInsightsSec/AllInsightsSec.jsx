import testImg1 from '../../assets/insightsPage/113e6b05928d646203f8287d9edc0bed.jpeg';
import testImg2 from '../../assets/insightsPage/638f8f086209c17bb4918a1e5c7c4614.jpeg';
import testImg3 from '../../assets/insightsPage/693199e6f913b477f9c9a9c6d1838241.jpeg';
import testImg4 from '../../assets/insightsPage/6b324432e8e289d239130a8aa5bdf1a8.jpeg';
import testImg5 from '../../assets/insightsPage/85e169ebc12507aba3882a4ca2598a50.jpeg';
import testImg6 from '../../assets/insightsPage/9b9db0c7f3d391de22a1b8c06170fb32.jpeg';
import testImg7 from '../../assets/insightsPage/ab8710917a7a55ea117372933a0d282b.jpeg';
import testImg8 from '../../assets/insightsPage/b7aa21a2587e121e1a0dd0a088e27749.jpeg';
import testImg9 from '../../assets/insightsPage/b8a018435a182cdda0362ef5fb7e1da1.jpeg';
import testImg10 from '../../assets/insightsPage/c100949ed0aa8c7afea6638c9a970037.jpeg';
import testImg11 from '../../assets/insightsPage/c1bf630d3af0b657c040c50429dfbe0f.jpeg';
import InsightsMainCard from '../insightsMainCard/InsightsMainCard';

export default function AllInsightsSec() {
    const allInsights = [
        { id: 1, imgSrc: testImg1, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 2, imgSrc: testImg2, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 3, imgSrc: testImg3, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 4, imgSrc: testImg4, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 5, imgSrc: testImg5, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 6, imgSrc: testImg6, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 7, imgSrc: testImg7, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 8, imgSrc: testImg8, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 9, imgSrc: testImg9, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 10, imgSrc: testImg10, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 11, imgSrc: testImg11, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 12, imgSrc: testImg1, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 13, imgSrc: testImg2, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 14, imgSrc: testImg3, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 15, imgSrc: testImg4, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 16, imgSrc: testImg5, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 17, imgSrc: testImg6, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 18, imgSrc: testImg7, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 19, imgSrc: testImg8, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 20, imgSrc: testImg9, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 21, imgSrc: testImg10, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 22, imgSrc: testImg11, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
    ];
    return (
        <div className="section__handler sectionBgLight">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 mb-5">
                        <div className="header_ofSec">
                            <h3>Our latest insights</h3>
                        </div>
                    </div>
                    {
                        allInsights?.map(insight => (
                            <div key={insight?.id} className="col-lg-3 col-md-4">
                                <InsightsMainCard
                                    imgSrc={insight?.imgSrc}
                                    head={insight?.head}
                                    heading={insight?.heading}
                                    time={insight?.time}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
