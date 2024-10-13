import styles from './mySubServices.module.css'
import subServImg from '../../assets/subServ/subServImage.png'
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useParams } from 'react-router-dom';
export default function MySubServices() {
    const { subService } = useParams();
    const [currData] = useFetch(`${baseUrl}/show-sub-service/${subService}`);

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