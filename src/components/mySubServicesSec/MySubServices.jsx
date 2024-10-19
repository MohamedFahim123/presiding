import styles from './mySubServices.module.css'
import subServImg from '../../assets/subServ/subServImage.png'
import PropTypes from 'prop-types';

export default function MySubServices({currData}) {


    return (
        <div className={`${styles.subServices__handler}`}>
            <div className="container">
                <div className={`${styles.subServices__info}`}>
                    <h5>
                        {
                            currData?.subService?.title ?
                                currData?.subService?.title
                                :
                                ''
                        }
                    </h5>
                    <p>
                        {
                            currData?.subService?.body ?
                                currData?.subService?.body
                                :
                                ''
                        }
                    </p>
                    <div className="row">
                        {currData?.subService?.medias?.map(media => (
                            <div key={media?.id} className="col-md-6">
                                <div className={`${styles.subServices__image}`}>
                                    <img src={subServImg} alt="subServ-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

MySubServices.propTypes = {
    currData: PropTypes.object,
};