import styles from './mySubServices.module.css'
import PropTypes from 'prop-types';

export default function MySubServices({ currData }) {
    return (
        <div className={`${styles.subServices__handler}`}>
            <div className="container">
                <div className={`${styles.subServices__info}`}>
                    <h5>
                        {
                            currData?.title ?
                                currData?.title
                                :
                                ''
                        }
                    </h5>
                    <div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: currData?.body }} />
                        </div>
                    </div>
                    <div className="row">
                        {currData?.medias?.map(media => (
                            <div key={media?.id} className="col-md-6">
                                <div className={`${styles.subServices__image}`}>
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