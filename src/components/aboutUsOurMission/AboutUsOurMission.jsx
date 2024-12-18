import MyMainHeader from "../myMainHeaderSec/MyMainHeader";
import styles from './aboutUsOurMission.module.css';
import img1 from '../../assets/aboutUs/img1.png';
import img2 from '../../assets/aboutUs/img2.png';
import img3 from '../../assets/aboutUs/img3.png';
import img4 from '../../assets/aboutUs/img4.png';

export default function AboutUsOurMission() {
    const contentArr = [
        {
            id: 1,
            imageSrc: img1,
            title: 'Trusted business',
            text: 'We Deliver success to your business.',
        },
        {
            id: 2,
            imageSrc: img2,
            title: 'Expertise in Action',
            text: 'We assist our clients to set right strategy.',
        },
        {
            id: 3,
            imageSrc: img3,
            title: 'Recognized Excellence',
            text: 'We see challenges as opportunities.',
        },
        {
            id: 4,
            imageSrc: img4,
            title: 'Always Ready to Help',
            text: 'We Deliver success to your business.',
        },
    ]
    return (
        <div className={styles.aboutUsMission__handler}>
            <div className="container">
                <div className="row">
                    <MyMainHeader
                        secHead='OUR MISSION'
                        secText='HELPING ENTITIES STAND OUT'
                    />
                    {
                        contentArr?.map(el => (
                            <div key={el?.id} className="col-lg-3 col-md-4 mt-4 px-3 text-center d-flex flex-column justify-content-center align-items-center">
                                <img className={styles.cardImage} src={el?.imageSrc} alt={el?.title} />
                                <h4 className={styles.cardTitle}>{el?.title}</h4>
                                <p className={styles.cardText}>{el?.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};