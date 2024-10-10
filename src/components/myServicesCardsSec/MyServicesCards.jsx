import './myServicesCards.module.css'
import styles from './myServicesCards.module.css'
import cardImg from '../../assets/servicesCard/card1.png'
import ServiceCard from '../serviceCardSec/ServiceCard'
export default function MyServicesCards() {
    const serviceCardItems = [
        {
            cardImage: cardImg,
            title: 'Operational Excellence',
            disc: 'We help organizations improve their performance by optimizing processes, enhancing efficiency, and fostering a culture of continuous improvement.',
            subServices:[
                {
                    subServId: 1,
                    SubServName: 'Policies & Procedures'
                },
                {
                    subServId: 2,
                    SubServName: 'Risk Management'
                },
                {
                    subServId: 3,
                    SubServName: 'Policies & Procedures' 
                }
            ],
        },
        {
            cardImage: cardImg,
            title: 'Operational Excellence',
            disc: 'We help organizations improve their performance by optimizing processes, enhancing efficiency, and fostering a culture of continuous improvement.',
            subServices:[
                {
                    subServId: 1,
                    SubServName: 'Policies & Procedures'
                },
                {
                    subServId: 2,
                    SubServName: 'Risk Management'
                },
                {
                    subServId: 3,
                    SubServName: 'Policies & Procedures' 
                }
            ],
        },
        {
            cardImage: cardImg,
            title: 'Operational Excellence',
            disc: 'We help organizations improve their performance by optimizing processes, enhancing efficiency, and fostering a culture of continuous improvement.',
            subServices:[
                {
                    subServId: 1,
                    SubServName: 'Policies & Procedures'
                },
                {
                    subServId: 2,
                    SubServName: 'Risk Management'
                },
                {
                    subServId: 3,
                    SubServName: 'Policies & Procedures' 
                }
            ],
        },
        {
            cardImage: cardImg,
            title: 'Operational Excellence',
            disc: 'We help organizations improve their performance by optimizing processes, enhancing efficiency, and fostering a culture of continuous improvement.',
            subServices:[
                {
                    subServId: 1,
                    SubServName: 'Policies & Procedures'
                },
                {
                    subServId: 2,
                    SubServName: 'Risk Management'
                },
                {
                    subServId: 3,
                    SubServName: 'Policies & Procedures' 
                }
            ],
        }
    ];

    return (
        <div className={`${styles.myServicesCards__handler}`}>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        serviceCardItems?.map((el, idx)=>(
                            <div key={idx} className="col-md-6">
                                <ServiceCard cardImg={el?.cardImage} cardTitle={el?.title} cardDesc={el?.disc} subLinks={el?.subServices} subServLink={'/services/:subService'}/>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
};

