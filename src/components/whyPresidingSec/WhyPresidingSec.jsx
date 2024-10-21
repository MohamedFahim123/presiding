import PropTypes from 'prop-types';
import styles from './whyPresidingSec.module.css';
import logoImg from '../../assets/home-overview/Group 1000003172.png';
export default function WhyPresidingSec({ heading, paraOne, paraTwo }) {
    return (
        <div className={styles.whyPresidingSec__handler}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>
                            {heading ? heading : ''}
                        </h2>
                        <p>
                            {paraOne ? paraOne : ''}
                        </p>
                        <p className='mt-3'>
                            {paraTwo ? paraTwo : ''}
                        </p>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-end">
                        <img src={logoImg} className={`${styles.whyPresidingImage}`} alt={'Logo Image'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
WhyPresidingSec.propTypes = {
    heading: PropTypes.string,
    paraOne: PropTypes.string,
    paraTwo: PropTypes.string,
}