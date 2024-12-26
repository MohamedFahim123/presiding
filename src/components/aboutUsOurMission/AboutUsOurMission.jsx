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
            title: 'Results-Oriented',
            text: 'We are committed to delivering solutions that are not only strategic but also executable, ensuring tangible business success.',
        },
        {
            id: 2,
            imageSrc: img2,
            title: 'Local Expertise',
            text: 'As a local firm, we bring unparalleled insight into the regional market and industry dynamics, tailoring our services to fit the unique needs of our clients.',
        },
        {
            id: 3,
            imageSrc: img3,
            title: 'Integrity',
            text: 'We uphold the highest ethical standards, building trust and long-term relationships with our clients and stakeholders.',
        },
        {
            id: 4,
            imageSrc: img4,
            title: 'Collaboration',
            text: 'We work hand-in-hand with our clients, fostering partnerships that align with their goals and create impactful outcomes.',
        },
    ];

    return (
        <div className={styles.aboutUsMission__handler}>
            <div className="container">
                <div className="row">
                    <MyMainHeader
                        secHead='OUR VALUES'
                        secText='Driven by Results, Grounded in Integrity'
                    />
                    {
                        contentArr?.map(el => (
                            <div key={el?.id} className="col-md-6 mt-4 px-3 text-center d-flex justify-content-between my-3 py-2">
                                <img className={styles.cardImage} src={el?.imageSrc} alt={el?.title} />
                                <div className="text-start ps-4">
                                    <h4 className={styles.cardTitle}>{el?.title}</h4>
                                    <p className={styles.cardText}>{el?.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};