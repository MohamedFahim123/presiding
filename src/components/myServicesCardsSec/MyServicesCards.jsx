import './myServicesCards.module.css';
import styles from './myServicesCards.module.css';
import ServiceCard from '../serviceCardSec/ServiceCard';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';

export default function MyServicesCards() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currData] = useFetch(`${baseUrl}/all-services?page=${currentPage}`);
    const totalPages = currData?.data?.meta?.last_page || 1;
    const currentPageMeta = currData?.data?.meta?.current_page || 1;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`${styles.myServicesCards__handler}`}>
            <div className="container">
                <div className="row justify-content-center">
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

