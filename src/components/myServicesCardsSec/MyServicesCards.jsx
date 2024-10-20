import './myServicesCards.module.css';
import styles from './myServicesCards.module.css';
import ServiceCard from '../serviceCardSec/ServiceCard';
import PropTypes from 'prop-types';

export default function MyServicesCards({currData,setCurrentPage}) {
    const totalPages = currData?.data?.meta?.last_page || 1;
    const currentPageMeta = currData?.data?.meta?.current_page || 1;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`${styles.myServicesCards__handler}`}>
            <div className="container">
                <div className='header_ofSec text-center py-4'>
                    <h3>
                        Lorem, ipsum dolor.
                    </h3>
                    <p className={`mt-3 m-auto ${styles?.mainParagraph}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente minima eveniet soluta repellendus?
                    </p>
                </div>
                <div className="row justify-content-center mt-4">
                    {
                        currData?.services?.map((service) => (
                            <div key={service?.id} className="col-md-6">
                                <ServiceCard service={service} />
                            </div>
                        ))
                    }
                </div>
                <div className="pagination justify-content-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPageMeta - 1)}
                        disabled={currentPageMeta === 1}
                        className={`paginationBtn mx-1`}
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`paginationBtn mx-1 ${currentPageMeta === i + 1 ? 'active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPageMeta + 1)}
                        disabled={currentPageMeta === totalPages}
                        className={`paginationBtn mx-1`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
MyServicesCards.propTypes = {
    currData: PropTypes.array ,
    setCurrentPage: PropTypes.func,
};