import { useState } from 'react';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import InsightsMainCard from '../insightsMainCard/InsightsMainCard';

export default function AllInsightsSec() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currData] = useFetch(`${baseUrl}/all-blogs?page=${currentPage}`);
    const totalPages = currData?.data?.meta?.last_page || 1;
    const currentPageMeta = currData?.data?.meta?.current_page || 1;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="section__handler sectionBgLight">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 mb-5">
                        <div className="header_ofSec">
                            <h3>Our latest insights</h3>
                        </div>
                    </div>
                    {
                        currData?.blogs?.map(insight => (
                            <div key={insight?.id} className="col-lg-3 col-md-4">
                                <InsightsMainCard
                                    insight={insight}
                                />
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
