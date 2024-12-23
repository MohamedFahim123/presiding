import bgImage from '../../assets/pranches/Map.jpg';
import BranchesSection from '../../components/branchesSection/BranchesSection';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';

export default function Pranches() {
    return (
        <>
            <MyHeroImage title={`Our Branches`} bgImage={bgImage} bg bgPosition={'center'} height={'90vh'} />
            <BranchesSection />
        </>
    );
};