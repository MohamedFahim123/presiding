import PropTypes from 'prop-types';
import styles from './whyPresidingSec.module.css';
import logoImg from '../../assets/whyChooseUs/istockphoto-864811534-612x612.jpg';
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
                    <div className="col-lg-3 d-lg-block d-none text-end">
                        <img className='mt-5' src={logoImg} alt="logo prisiding" />
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